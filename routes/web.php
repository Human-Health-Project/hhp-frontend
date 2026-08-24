<?php

use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    $index = public_path('build/index.html');

    abort_unless(is_file($index), 503, 'The React application has not been built.');

    return response()->file($index);
});
