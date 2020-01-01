<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Etudiant;
use App\Compte;
use App\Helpers\Helper;

class EtudController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $etudiant = new Etudiant();  
        $compte=new Compte(); 
        $etudiant->Nom=$request->Nom;
        $etudiant->Prenom=$request->Prenom;
        $etudiant->Datenaissance=$request->Datenaissance;
        $etudiant->Lieunaissance=$request->Lieunaissance;
        $etudiant->Adress=$request->Adress;
        $etudiant->Numtelephone=$request->Numtelephone;
        $etudiant->Matricule=$request->Matricule;
        $etudiant_save=$etudiant->save();
        $compte->Username=$request->Nom.$request->Prenom;
        $compte->Password=$request->Lieunaissance.$request->Datenaissance;
        $compte->Type="Etudiant";
        $compte->save();
        if($etudiant_save){
          $response = APIHelper::createAPIResponse(false,"201",$etudiant->Nom.'Student was created succesfully',null);
           return response()->json($response,201);
   
        }else{
           $response = APIHelper::createAPIResponse(true,"401",$etudiant->Nom.'creation failed'  ,null);
           return response()->json($response,401);


     }
     
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
