<?php

namespace App\Http\Controllers;

use App\Models\Pond;
use Illuminate\Http\Request;

class PondController extends Controller
{
    public function index(Request $request)
    {
        return $request->user()->ponds;
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
            'water_quality' => 'nullable|json',
        ]);

        $pond = Pond::create([
            'farmer_id' => $request->user()->id,
            'name' => $request->name,
            'location' => $request->location,
            'water_quality' => $request->water_quality,
        ]);

        return response()->json($pond, 201);
    }
}