<?php

namespace App\Http\Controllers;

use App\Uploaded_file;
use Illuminate\Http\Request;
use App\Helpers\APIHelper;

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

    /*public function createFile(Request $request) {
            $file= new Uploaded_file();
            $file->fileName= $request->fileName;
            $file->fileLink= $request->fileLink;
            $issaved=$file->save();
            if($issaved){
                $response = APIHelper::createAPIResponse(false,"201",'File was uploaded succesfully',null);
                return response()->json($response,201);

            }else{
                $response = APIHelper::createAPIResponse(true,"401",'Upload failed',null);
                return response()->json($response,401);
            }

    }*/

    public function createFile(Request $request)
    {
        if($request->hasFile('file'))
        {
            //$file= new Uploaded_file();
            $name=$request->file->getClientOriginalName();
            $isuploaded=$request->file->storeAs('public',$name);
            if($isuploaded)
            {
                $file= new Uploaded_file();
                $file->fileName=$name;
                $issaved=$file->save();
                if($issaved){
                    $response = APIHelper::createAPIResponse(false,"201",'File was uploaded succesfully and Name was saved in DB',null);
                    return response()->json($response,201);

                }else{
                    $response = APIHelper::createAPIResponse(true,"401",'File was Uploaded succesfully but Name not sved in Db',null);
                    return response()->json($response,401);
                }
            }
            else
            {
                $response = APIHelper::createAPIResponse(true,"401",'Uploaded Failed',null);
                return response()->json($response,401);
            }

        }
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
