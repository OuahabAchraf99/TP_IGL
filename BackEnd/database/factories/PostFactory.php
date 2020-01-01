U<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Uploaded_file::class, function (Faker $faker) {
    return [
        'fileName' =>$faker->sentence(3,true),
        'fileLink' =>$faker->realText($faker->numberBetween(10, 50)),

    ];
});
