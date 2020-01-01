<?php

namespace App\Http\Controllers;

use App\Uploaded_file;
use Illuminate\Http\Request;

class uploadFileController extends Controller
{
    public function saveFile(Request $request)
    {
        if($request->isMethod('post'))
        {
            $file= new Uploaded_file();
            $file->fileName=
        }

    }
}
