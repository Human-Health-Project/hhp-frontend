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
                    return response()->file($candidate);
                }
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
