<?php

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

Route::get('/', function () {
    return view('welcome');
});
// les routes pour gérer les fonctionalités 
Route::post('/uploadfile','uploadFileApi@createFile');


Route::post('Etudiant', 'EtudController@store');
Route::get('Etudiants', 'EtudController@index');