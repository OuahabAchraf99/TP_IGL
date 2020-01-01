<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnseignantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enseignants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->String('Nom');
            $table->String('Prenom');
            $table->String('Datenaissance');
            $table->String('Lieunaissance');
            $table->String('Adress');
            $table->String('Matricule')->defalt(Null);
            $table->String('Annee')->defalt(Null);
            $table->String('Numtelephone')->defalt(Null);
            $table->String('Module')->defalt(Null);
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('enseignants');
    }
}
