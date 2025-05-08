<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
class FarmerMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user() && $request->user()->isFarmer()) {
            return $next($request);
        }
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}