<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/blog/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $blog = new Blog();
        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->image = $request->image;
        $blog->author = Auth::user()->name;
        $blog->save();

        return redirect(route('admin.dashboard'))->with('success', 'Blog Created!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return inertia('Admin/blog/Edit', [
            'blog' => Blog::findOrFail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->image = $request->image;
        $blog->author = Auth::user()->name;
        $blog->save();

        return redirect(route('admin.dashboard'))->with('success', 'Blog Updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $blog = Blog::findorFail($id);
        $blog->delete();
        return session()->flash('success', 'blog Deleted.');
    }

    /**
     * Set specific post featured.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function set_featured($id)
    {
        $currentFeatured = Blog::where('featured', true)->first();
        if ($currentFeatured) {
            $currentFeatured->featured = false;
            $currentFeatured->save();
        }

        // Set the new blog as featured
        $blog = Blog::findOrFail($id);
        $blog->featured = true;
        $blog->save();
    }
}
