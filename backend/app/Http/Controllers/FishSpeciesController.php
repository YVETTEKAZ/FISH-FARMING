<?php

namespace App\Http\Controllers;

use App\Models\FishSpecies;

class FishSpeciesController extends Controller
{
    public function index()
    {
        return FishSpecies::all();
    }
}