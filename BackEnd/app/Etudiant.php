<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    public function compte()
{
    return $this->belongsTo('App\Compte', 'foreign_key');
}
}
