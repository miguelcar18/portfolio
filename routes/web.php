<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/download-cv/{lang}', function ($lang) {
    $driveId = $lang === 'en' ? '1Np_-6rTCxF31Arr_Vrtm0LUZ0y5FYeT4' : '1XUc-64bqXRas-OXUqtJ3_b2qygI3VnCh';
    $url = "https://drive.google.com/uc?export=download&id={$driveId}";
    return redirect()->away($url);
})->name('cv.download');