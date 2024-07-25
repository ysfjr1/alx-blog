<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Display the login view.
     */
    public function login_page()
    {
        return inertia('Auth/Login');
    }

    /**
     * Login resource.
     */
    public function login_store(LoginRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();
        return redirect(route('admin.dashboard'));
    }

    /**
     * Destroy an authenticated session.
     */
    public function login_destroy(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect(route('home'));
    }
}
