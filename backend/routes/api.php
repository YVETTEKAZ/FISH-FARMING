 <?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PondController;
use App\Http\Controllers\FishSpeciesController;

// ====================
// Public Routes
// ====================
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// ====================
// Protected Routes
// ====================
Route::middleware('auth:sanctum')->group(function () {

    // Dashboard redirection based on role
    Route::get('/dashboard', [DashboardController::class, 'index']);

    // Ponds
    Route::get('/ponds', [PondController::class, 'index']);
    Route::post('/ponds', [PondController::class, 'store']);

    // Fish Species (fetched by React frontend)
    Route::get('/fish-species', [FishSpeciesController::class, 'index']);
    Route::post('/fish-species', [FishSpeciesController::class, 'store']);

    // Assign fish to pond
    Route::post('/ponds/{pond}/assign-fish', [PondController::class, 'assignFish']);

    // Logout
    Route::post('/logout', [AuthController::class, 'logout']);
});