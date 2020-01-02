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

<<<<<<< HEAD
Route::post('/uploadfile','uploadFileApi@createFile');
Route::get('/uploadfile','uploadFileApi@createFile');

=======
Route::post('/uploadfile','UploadFileApi@createFile');
Route::get('/uploadfile','UploadFileController@createFile');
Route::post('/axios','UploadFileController@createFile');
Route::post('/Etudiant', 'EtudController@store');
>>>>>>> d967547d4b7ac02a753ef2064c59c014e3e672a4
