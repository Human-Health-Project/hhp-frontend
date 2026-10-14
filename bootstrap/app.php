<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(using: function (): void {
        Route::get('/up', fn () => response('OK', 200));

        Route::fallback(function () {
            // getPathInfo() keeps a trailing slash ("/about-us/"); path() does not.
            $requested = request()->getPathInfo();
            $path = trim($requested, '/');
            abort_if(str_contains($path, '..'), 404);

            $root = base_path('out');

            // Permanent redirect with a relative Location header, so it never
            // depends on how the app sees its own scheme/host behind the proxy.
            $movedTo = fn (string $to) => response('', 301, ['Location' => $to]);

            // The exported HTML file for a route ('' = home), or null.
            $findPage = function (string $route) use ($root): ?string {
                if ($route === '') {
                    return "{$root}/index.html";
                }
                // Next's internal error pages are not real URLs.
                if (in_array($route, ['404', '_not-found'], true)) {
                    return null;
                }
                foreach (["{$root}/{$route}.html", "{$root}/{$route}/index.html"] as $file) {
                    if (is_file($file)) {
                        return $file;
                    }
                }

                return null;
            };

            // 1. Static files from the export (JS, CSS, images, RSC payloads,
            //    robots.txt, sitemap.xml) are served exactly as requested.
            //    Exported .html pages are handled in step 2 instead, so each
            //    page is reachable at one URL only.
            if ($path !== '' && ! str_ends_with(strtolower($path), '.html') && is_file("{$root}/{$path}")) {
                $contentTypes = [
                    'css' => 'text/css; charset=utf-8',
                    'js' => 'application/javascript; charset=utf-8',
                    'json' => 'application/json; charset=utf-8',
                    'txt' => 'text/plain; charset=utf-8',
                    'xml' => 'application/xml; charset=utf-8',
                    'svg' => 'image/svg+xml',
                    'woff' => 'font/woff',
                    'woff2' => 'font/woff2',
                    'png' => 'image/png',
                    'jpg' => 'image/jpeg',
                    'jpeg' => 'image/jpeg',
                    'webp' => 'image/webp',
                    'ico' => 'image/x-icon',
                ];

                $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
                $headers = isset($contentTypes[$extension])
                    ? ['Content-Type' => $contentTypes[$extension]]
                    : [];

                // The .txt files next to each page are Next's client-side
                // navigation payloads, not pages: keep them out of the index.
                if ($extension === 'txt' && $path !== 'robots.txt') {
                    $headers['X-Robots-Tag'] = 'noindex';
                }

                return response()->file("{$root}/{$path}", $headers);
            }

            // 2. Pages. Every page has exactly one preferred URL: lowercase,
            //    no trailing slash, no ".html" (e.g. /who-we-are/about-us). It
            //    is the URL in the page's canonical tag and in the sitemap.
            //    Variants (/who-we-are/about-us/, /who-we-are/about-us.html,
            //    /Who-We-Are/About-Us) 301 to it, keeping the query string.
            $route = preg_replace('#(^|/)index$#', '', preg_replace('#\.html$#i', '', $path));

            foreach (array_unique([$route, strtolower($route)]) as $candidate) {
                if ($file = $findPage($candidate)) {
                    $preferred = '/'.$candidate;

                    if ($requested === $preferred) {
                        return response()->file($file, ['Content-Type' => 'text/html; charset=utf-8']);
                    }

                    $query = request()->getQueryString();

                    return $movedTo($preferred.($query ? "?{$query}" : ''));
                }
            }

            // 3. No page at this path. If it is an old WordPress URL that has
            //    moved, 301 straight to its replacement (see config/redirects.php).
            //    The query string is dropped: WordPress parameters such as
            //    ?language=english mean nothing on the new site.
            $legacyPath = strtolower($path);
            $redirects = config('redirects');

            if (isset($redirects['pages'][$legacyPath])) {
                return $movedTo($redirects['pages'][$legacyPath]);
            }

            foreach ($redirects['patterns'] ?? [] as $pattern => $target) {
                if (preg_match($pattern, $legacyPath)) {
                    return $movedTo($target);
                }
            }

            // Old WordPress article permalinks: /{category}/{slug}/ or /{slug}/.
            // Redirect to /blog/{slug} only if that post exists in the build,
            // so feeds, test pages and other junk still return 404.
            $segments = explode('/', $legacyPath);
            if (count($segments) <= 2) {
                $slug = rtrim(end($segments), '-');

                if (preg_match('/^[a-z0-9][a-z0-9_-]*$/', $slug) && $findPage("blog/{$slug}")) {
                    return $movedTo("/blog/{$slug}");
                }
            }

            foreach ($redirects['fallbacks'] ?? [] as $pattern => $target) {
                if (preg_match($pattern, $legacyPath)) {
                    return $movedTo($target);
                }
            }

            // 4. Genuinely not found: the site's own 404 page, with a real 404
            //    status, when the static export includes one.
            if (is_file("{$root}/404.html")) {
                return response(file_get_contents("{$root}/404.html"), 404)
                    ->header('Content-Type', 'text/html; charset=utf-8');
            }

            abort(404);
        });
    })
    ->withMiddleware(function (Middleware $middleware): void {
        // Static frontend: no stateful middleware required.
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // Use Laravel's default exception rendering.
    })->create();
