<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Jour;

class JourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $day = [
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi', 
            'Vendredi',
            'Samedi',
            'Dimanche'
        ];

        foreach($day as $item){
            Jour::create(['libelle' => $item]);
        }
    }
}
