<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function dashboard()
    {
        return inertia('Admin/Dashboard', [
            'user' => Auth::user()->name,
            'blogs' => Blog::orderBy('created_at', 'desc')->paginate(10)
        ]);
    }
}
