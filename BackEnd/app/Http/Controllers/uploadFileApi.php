<?php

namespace App\Http\Controllers;

use App\Uploaded_file;
use Illuminate\Http\Request;

class uploadFileApi extends Controller
{
   /* public function saveFile(Request $request)
    {
        if($request->isMethod('post'))
        {
            $file= new Uploaded_file();
            $file->fileName=
        }

    }*/

    public function getAllFiles() {
        // logic to get all Files goes here
    }

    public function createFile(Request $request) {
        // logic to create a File record goes here
        /*$post = Uploaded_file::create($request->all());
        return response()->json($post);*/
        if($request->isMethod('post'))
        {
            $file= new Uploaded_file();
            $f=json_decode($request->all());
            $file->fileName= $f[0];
            $file->fileLink= $f[1];
            $file->save();
            //return view('addFile');
        }
        return view('addFile');
    }

    public function getFile($id) {
        // logic to get a File record goes here
    }

    public function updateFile(Request $request, $id) {
        // logic to update a File record goes here
    }

    public function deleteFile ($id) {
        // logic to delete a File record goes here
    }
}
