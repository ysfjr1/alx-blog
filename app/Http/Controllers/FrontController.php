<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FrontController extends Controller
{
    public function home()
    {
        return inertia('Front/Home', [
            'blogs' => Blog::orderBy('created_at', 'desc')->paginate(4),
            'featuredblog' => Blog::where('featured', true)->orderBy('created_at', 'desc')->first(),
            'user' => Auth::user(),
        ]);
    }

    public function blog($slug)
    {
        $currentBlog = Blog::where('slug', $slug)->firstOrFail();

        $otherBlogs = Blog::where('id', '!=', $currentBlog->id)
            ->orderBy('created_at', 'desc')
            ->take(4)
            ->get();

        return inertia('Front/Post', [
            'blog' => $currentBlog,
            'otherBlogs' => $otherBlogs,
        ]);
    }
}
