<?php

namespace Database\Seeders;

use App\Models\Specialist;
use Illuminate\Database\Seeder;

class SpecialistSeeder extends Seeder
{
    public function run(): void
    {
        Specialist::create([
            'name' => 'Dr. John Kigali',
            'phone' => '+250788123456',
            'email' => 'john@example.com',
            'expertise' => 'Tilapia farming and water quality'
        ]);

        Specialist::create([
            'name' => 'Mary Ruhengeri',
            'phone' => '+250789456123',
            'email' => 'mary@example.com',
            'expertise' => 'Catfish breeding'
        ]);
    }
}