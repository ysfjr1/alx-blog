<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\FrontController;
use Illuminate\Support\Facades\Route;

/** AUTH ROUTES **/
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'login_page'])->name('login');
    Route::post('/signin', [AuthController::class, 'login_store'])->name('login.store');
});
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'login_destroy'])->name('logout');
});
/** AUTH ROUTES END**/

Route::get('/', [FrontController::class, 'home'])->name('home');
Route::get('/blog/{blog}', [FrontController::class, 'blog'])->name('blog');


/** ADMIN ROUTES **/
Route::name('admin.')->middleware('auth')->prefix('/admin')->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::Resource('blogs', BlogController::class);
    Route::put('/blogs/set-Featured/{id}', [BlogController::class, 'set_featured'])->name('blog_set_featured');
});
/** ADMIN ROUTES END **/
