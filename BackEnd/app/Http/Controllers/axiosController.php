<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class axiosController extends Controller
{
    public function rediriger(Request $request)
    {
        
        return view('axiosView');
    }
}
