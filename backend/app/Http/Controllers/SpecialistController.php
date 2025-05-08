<?php

namespace App\Http\Controllers;

use App\Models\Specialist;
use Illuminate\Http\Request;

class SpecialistController extends Controller
{
    public function index()
    {
        return Specialist::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'expertise' => 'nullable|string|max:255',
        ]);

        $specialist = Specialist::create($request->all());
        return response()->json($specialist, 201);
    }

    public function update(Request $request, $id)
    {
        $specialist = Specialist::findOrFail($id);
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'expertise' => 'nullable|string|max:255',
        ]);

        $specialist->update($request->all());
        return response()->json($specialist);
    }

    public function destroy($id)
    {
        Specialist::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}