<?php

namespace App\Http\Controllers;

use App\Models\FishSpecies;
use Illuminate\Http\Request;

class FishSpeciesController extends Controller
{
    public function index()
    {
        return FishSpecies::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'nullable'
        ]);

        return FishSpecies::create($request->all());
    }

    public function show($id)
    {
        return FishSpecies::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $species = FishSpecies::findOrFail($id);
        $species->update($request->all());

        return $species;
    }

    public function destroy($id)
    {
        return FishSpecies::destroy($id);
    }
}
