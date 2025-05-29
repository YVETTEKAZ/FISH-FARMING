<?php

namespace App\Http\Controllers;

use App\Models\Pond;
use Illuminate\Http\Request;

class PondController extends Controller
{
public function index(Request $request)
{
    $user = auth()->user();

    if ($request->query('all') == 1 && in_array($user->role, ['admin', 'specialist'])) {
        return Pond::with('user', 'fishSpecies')->get();
    }

    return Pond::with('user', 'fishSpecies')->where('user_id', $user->id)->get();
}


   public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string',
        'location' => 'required|string',
        'size' => 'required|string',
    ]);

    $pond = $request->user()->ponds()->create([
        'name' => $request->name,
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

    $request->validate([
        'name' => 'required|string',
        'location' => 'required|string',
        'size' => 'required|string',
        

    ]);

    $pond->update($request->only(['name', 'location', 'size']));

    return response()->json(['message' => 'Pond updated', 'pond' => $pond]);
}

public function destroy($id)
{
    $pond = Pond::findOrFail($id);
    $pond->fishSpecies()->detach(); // detach all fish before deletion
    $pond->delete();

    return response()->json(['message' => 'Pond deleted']);
}    public function assignFish(Request $request, $id)
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
