<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ObjednavkaController;
use App\Http\Controllers\SluzbyController;

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

//USER
Route::post('/api/register',  [UserController::class, 'insertAction']);

Route::post('/api/login',  [UserController::class, 'login']);


//OBJEDNAVKY
Route::post('/api/objednavka/update/{id}',[ObjednavkaController::class, 'updateAction']);

Route::delete('/api/Vymazanie/{id}', [ObjednavkaController::class, 'deleteAction']);

Route::get('/api/objednavky', [ObjednavkaController::class, 'showAllObjednavky']);

Route::post('/api/Vytvorenie', [ObjednavkaController::class, 'insertAction']);

Route::get('/api/objednavka/{id}', [ObjednavkaController::class, 'showObjednavka']);


//SLUZBY
Route::post('/api/sluzby/update/{id}',[SluzbyController::class, 'updateAction']);

Route::get('/api/sluzby', [SluzbyController::class, 'showAllAction']);




