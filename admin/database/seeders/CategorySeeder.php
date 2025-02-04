<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['libelle' => 'Maquis & bars locaux', 'icon' => 'icon_set_1_icon-15', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Bars à bière & caves à vin', 'icon' => 'icon_set_1_icon-23', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Restaurants gastronomiques & internationaux', 'icon' => 'icon_set_1_icon-14', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Restaurants africains & ivoiriens', 'icon' => 'icon_set_1_icon-58', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Grillades & Chawarma', 'icon' => 'icon_set_3_restaurant-1', 'status' => 1, 'created_by' => 'admin'],
        
            ['libelle' => 'Boîtes de nuit & clubs VIP', 'icon' => 'icon-cd-3', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Karaokés & ambiance live', 'icon' => 'icon-mic-circled', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Bars lounge & rooftops', 'icon' => 'icon_set_2_icon-106', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Casinos & salles de jeux', 'icon' => 'icon-gamepad', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Afterworks & événements privés', 'icon' => 'icon-shop-1', 'status' => 1, 'created_by' => 'admin'],
        
            ['libelle' => 'Cinémas & projections spéciales', 'icon' => 'icon_set_2_icon-116', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Spectacles & théâtre africain', 'icon' => 'icon_set_2_icon-107', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Stand-up & comédies locales', 'icon' => 'icon_set_1_icon-97', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Parcs d’attractions & espaces de loisirs', 'icon' => 'icon_set_1_icon-3', 'status' => 1, 'created_by' => 'admin'],
        
            ['libelle' => 'Escape games & jeux immersifs', 'icon' => 'icon_set_1_icon-63', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Laser game & paintball', 'icon' => 'icon_set_2_icon-114', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Bowling & billard', 'icon' => 'icon_set_1_icon-3', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Salles de jeux vidéo & e-sport', 'icon' => 'icon_set_2_icon-106', 'status' => 1, 'created_by' => 'admin'],
        
            ['libelle' => 'Plages privées & complexes balnéaires', 'icon' => 'icon_set_2_icon-108', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Jet-ski & sports nautiques', 'icon' => 'icon_set_2_icon-110', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Karting & sports mécaniques', 'icon' => 'icon_set_1_icon-21', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Randonnées & tourisme écologique', 'icon' => 'icon_set_1_icon-30', 'status' => 1, 'created_by' => 'admin'],
        
            ['libelle' => 'Spas & instituts de massage', 'icon' => 'icon_set_2_icon-115', 'status' => 1, 'created_by' => 'admin'],
            ['libelle' => 'Hammams & centres de bien-être', 'icon' => 'icon_set_1_icon-12', 'status' => 1, 'created_by' => 'admin'],
        ];

        foreach ($categories as $category) {
            \App\Models\Categoriesplan::create($category);
        }


    }
}
