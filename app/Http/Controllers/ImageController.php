<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Images;
use App\Http\Requests\ImageStoreRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // all images
        $images = Images::orderBy('created_at', 'desc')->get();
        return response()->json([
            'images' => $images
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ImageStoreRequest $request)
    {
        try {
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();

            // create image
            Images::create([
                'title' => $request->title,
                'image' => $imageName,
                'description' => $request->description,
            ]);

            // save image in storage folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            // return Json Response
            return response()->json([
                'message' => 'Image successfully added'
            ], 200);
        } catch (\Exception $e) {
            // return Json Response
            return response()->json([
                'message' => 'something went really wrong'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // image detail
        $image = Images::find($id);
        if (!$image) {
            return response()->json([
                'message' => 'Image Not Found!',
            ], 404);
        }
        return response()->json([
            'image' => $image
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ImageStoreRequest $request, string $id)
    {
        try {
            // find product
            $images = Images::find($id);
            if (!$images) {
                return response()->json([
                    'message' => 'Image Not Found!',
                ], 404);
            }

            // echo "request : $request->title";
            // echo "description : $request->description";
            $images->title = $request->title;
            $images->description = $request->description;

            if ($request->images) {
                // public storage
                $storage = Storage::disk('public');

                // old image delete
                if ($storage->exists($images->image)) {
                    $storage->delete($images->image);
                }

                // image name
                $imageName = Str::random(32) . "." . $request->images->getClientOriginalExtension();
                $images->image = $imageName;

                // image save in public folder
                $storage->put($imageName, file_get_contents($request->image));
            }
            // update image
            $images->save();

            // return Json Response
            return response()->json([
                'message' => 'Image successfully update!'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something Went Really Wrong!!'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Detail
        $image = Images::findOrFail($id);

        if (!$image) {
            return response()->json([
                'message' => 'Product Not Found!',
            ], 404);
        }

        // public storage
        $storage = Storage::disk('public');

        // image delete
        if ($storage->exists($image->image)) {
            $storage->delete($image->image);
        }

        $image->delete();
        // Return Json Response
        return response()->json([
            'message' => 'image successfully deleted'
        ], 200);
    }
}
