<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FishSpeciesController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PondController;
use App\Http\Controllers\SpecialistController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned the "api" middleware group. Make something great!
|
*/

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/fish-species', [FishSpeciesController::class, 'index']);
Route::get('/specialists', [SpecialistController::class, 'index']);

// Authenticated routes (require Sanctum token)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Farmer routes
    Route::middleware('farmer')->group(function () {
        Route::get('/ponds', [PondController::class, 'index']);
        Route::post('/ponds', [PondController::class, 'store']);
        Route::get('/notifications', [NotificationController::class, 'index']);
    });

    // Admin routes
    Route::middleware('admin')->group(function () {
        Route::post('/specialists', [SpecialistController::class, 'store']);
        Route::put('/specialists/{id}', [SpecialistController::class, 'update']);
        Route::delete('/specialists/{id}', [SpecialistController::class, 'destroy']);
    });
});