<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(using: function (): void {
        Route::get('/up', fn () => response('OK', 200));

        Route::fallback(function () {
            $index = public_path('build/index.html');
            abort_unless(is_file($index), 503, 'The React application has not been built.');

            return response()->file($index);
        });
    })
    ->withMiddleware(function (Middleware $middleware): void {
        // The React frontend does not require server-side middleware.
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // Use Laravel's default exception rendering.
    })->create();
