<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::user() && Auth::user()->status == 0){
            Auth::logout();
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, votre compte est inactif. Veuillez contacter l\'adminstrateur.');
            return to_route('login');
        }

        return $next($request);
    }
}
