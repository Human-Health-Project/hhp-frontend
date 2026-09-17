<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(using: function (): void {
        Route::get('/up', fn () => response('OK', 200));

        Route::fallback(function () {
            $path = trim(request()->path(), '/');
            abort_if(str_contains($path, '..'), 404);

            $root = base_path('out');
            $candidates = $path === ''
                ? ["{$root}/index.html"]
                : ["{$root}/{$path}", "{$root}/{$path}.html", "{$root}/{$path}/index.html"];

            foreach ($candidates as $candidate) {
                if (is_file($candidate)) {
                    $contentTypes = [
                        'css' => 'text/css; charset=utf-8',
                        'js' => 'application/javascript; charset=utf-8',
                        'json' => 'application/json; charset=utf-8',
                        'svg' => 'image/svg+xml',
                        'woff' => 'font/woff',
                        'woff2' => 'font/woff2',
                        'png' => 'image/png',
                        'jpg' => 'image/jpeg',
                        'jpeg' => 'image/jpeg',
                        'webp' => 'image/webp',
                        'ico' => 'image/x-icon',
                    ];

                    $extension = strtolower(pathinfo($candidate, PATHINFO_EXTENSION));
                    $headers = isset($contentTypes[$extension])
                        ? ['Content-Type' => $contentTypes[$extension]]
                        : [];

                    return response()->file($candidate, $headers);
                }
            }

            // No page at this path. Before returning 404, check whether it is
            // an old WordPress URL that has moved (see config/redirects.php).
            $legacyPath = strtolower($path);

            $pages = config('redirects.pages', []);
            if (isset($pages[$legacyPath])) {
                return redirect($pages[$legacyPath], 301);
            }

            foreach (config('redirects.patterns', []) as $pattern => $target) {
                if (preg_match($pattern, $legacyPath)) {
                    return redirect($target, 301);
                }
            }

            // Old WordPress article permalinks: /{category}/{slug}/ or /{slug}/.
            // Redirect to /blog/{slug} only if that post exists in the build,
            // so feeds, test pages and other junk still return 404.
            $segments = explode('/', $legacyPath);
            if (count($segments) <= 2) {
                $slug = rtrim(end($segments), '-');

                if (preg_match('/^[a-z0-9][a-z0-9_-]*$/', $slug)
                    && (is_file("{$root}/blog/{$slug}.html") || is_file("{$root}/blog/{$slug}/index.html"))) {
                    return redirect("/blog/{$slug}", 301);
                }
            }

            // Serve the site's own 404 page (with a real 404 status) when the
            // static export includes one.
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
