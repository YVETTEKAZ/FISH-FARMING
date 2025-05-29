<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    // ✅ 1. Return all users (for admin)
    public function index()
    {
        return User::all();
    }

    // ✅ 2. Show current logged-in user
    public function me(Request $request)
    {
        return response()->json($request->user());
    }

    // ✅ 3. Update a user (admin only)
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'email' => 'required|email|unique:users,email,' . $user->id,
            'role' => 'required|in:admin,farmer,specialist'
        ]);

        $user->update($request->only('email', 'role'));

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user
        ]);
    }

    // ✅ 4. Delete a user
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully'
        ]);
    }
}
