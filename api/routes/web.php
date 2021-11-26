<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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


Route::get('/api/user/{id}', [UserController::class, 'showAction']);

/*
Route::post('/api/user/insert',[
    'as' => 'insert', 'uses' => 'UserController@insertAction'
]);

Route::patch('/api/user/update/{id}',[
    'as' => 'update', 'uses' => 'UserController@updateAction'
]);

Route::delete('/api/user/delete/{id}',[
    'as' => 'delete', 'uses' => 'UserController@deleteAction'
]); */
