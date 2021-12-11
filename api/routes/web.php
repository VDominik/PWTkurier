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

Route::get('/api/user', [UserController::class, 'showAllAction']);

Route::get('/api/objednavky', [ObjednavkaController::class, 'showAllObjednavky']);

Route::get('/api/sluzby', [SluzbyController::class, 'showAllAction']);

Route::get('/api/objednavka/{id}', [ObjednavkaController::class, 'showObjednavka']);

Route::post('/api/Vytvorenie', [ObjednavkaController::class, 'insertAction']);

Route::delete('/api/Vymazanie/{id}', [ObjednavkaController::class, 'deleteAction']);

Route::get('/api/edit/{id}', [ObjednavkaController::class, 'updateAction']);

Route::get('/api/user/{id}', [UserController::class, 'showAction']);

Route::post('/api/login',  [UserController::class, 'login']);

Route::post('/api/objednavka/update/{id}',[ObjednavkaController::class, 'updateAction']);

Route::post('/api/sluzby/update/{id}',[SluzbyController::class, 'updateAction']);

/*
Route::post('/api/user/insert',[
    'as' => 'insert', 'uses' => 'UserController@insertAction'
]);



Route::delete('/api/user/delete/{id}',[
    'as' => 'delete', 'uses' => 'UserController@deleteAction'
]); */
