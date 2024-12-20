<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [App\Http\Controllers\SiteController::class, 'index'])->name('home');
Route::get('/basket', [App\Http\Controllers\SiteController::class, 'basket'])->name('basket');
Route::get('/car-parts', [App\Http\Controllers\SiteController::class, 'parts'])->name('parts');





Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/my-account', [App\Http\Controllers\HomeController::class, 'myaccount'])->name('myaccount');

