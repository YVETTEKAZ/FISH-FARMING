<?php

namespace App\Http\Controllers;

use App\Models\Pond;
use Illuminate\Http\Request;

class PondController extends Controller
{
    public function index()
    {
        return Pond::with(['user', 'fishSpecies'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'user_id' => 'required|exists:users,id',
            'location' => 'required|string',
            'size' => 'required|string',
            
        ]);

        $pond = Pond::create([
            'name' => $request->name,
            'user_id' => $request->user_id,
            'location' => $request->location,
            'size' => $request->size,
            
        ]);

        $pond->fishSpecies()->sync($request->fish_species_ids);

        return response()->json(['message' => 'Pond created', 'pond' => $pond->load('fishSpecies')]);
    }

    public function show($id)
    {
        return Pond::with('fishSpecies')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $pond = Pond::findOrFail($id);

        $pond->update($request->only(['location', 'size']));

        if ($request->has('fish_species_ids')) {
            $pond->fishSpecies()->sync($request->fish_species_ids);
        }

        return $pond->load('fishSpecies');
    }

    public function destroy($id)
    {
        $pond = Pond::findOrFail($id);
        $pond->fishSpecies()->detach();
        $pond->delete();

        return response()->json(['message' => 'Pond deleted']);
    }
    public function assignFish(Request $request, $id)
{
    $request->validate([
        'fish_species_ids' => 'required|array',
        'fish_species_ids.*' => 'exists:fish_species,id',
    ]);

    $pond = Pond::findOrFail($id);
    $pond->fishSpecies()->sync($request->fish_species_ids);

    return response()->json([
        'message' => 'Fish species assigned to pond successfully',
        'pond' => $pond->load('fishSpecies')
    ]);
}

}
