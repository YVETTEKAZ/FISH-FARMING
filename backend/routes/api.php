 <?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PondController;
use App\Http\Controllers\FishSpeciesController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;





// ====================
// Public Routes
// ====================
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::get('/users', [UserController::class, 'index']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::post('/contact', [ContactController::class, 'store']);


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
    //pond update and delete

    //Route::post('/ponds/{pond}/assign-fish', [PondController::class, 'updateFish']);
    //Route::delete('/ponds/{pond}/remove-fish/{fish}', [PondController::class, 'removeFish']);
    Route::put('/ponds/{id}', [PondController::class, 'update']);
    Route::delete('/ponds/{id}', [PondController::class, 'destroy']);


});