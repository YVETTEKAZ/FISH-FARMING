<?php

namespace Database\Seeders;

use App\Models\FishSpecies;
use Illuminate\Database\Seeder;

class FishSpeciesSeeder extends Seeder
{
    public function run(): void
    {
        FishSpecies::create([
            'name' => 'Tilapia',
            'description' => 'A hardy fish commonly farmed in Rwanda.',
            'growth_conditions' => 'Warm water (22-28°C), pH 6.5-8.5, oxygen >5 mg/L',
            'locations' => 'Lake Kivu, Muhazi Lake, Southern Province'
        ]);

        FishSpecies::create([
            'name' => 'Catfish',
            'description' => 'Resilient fish suitable for pond farming.',
            'growth_conditions' => 'Warm water (24-30°C), pH 6.0-8.0, oxygen >4 mg/L',
            'locations' => 'Southern Province, Eastern Province'
        ]);
    }
}