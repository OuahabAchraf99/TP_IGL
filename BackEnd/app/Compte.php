<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Compte extends Model
{
    public function etudiant()
    {
        return $this->hasOne('App\Etudiant');
    }
}
