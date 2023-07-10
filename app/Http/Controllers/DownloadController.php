<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DownloadController extends Controller
{
    public function downloadFile($filename)
    {
        $path = public_path('http://127.0.0.1:8000/storage/' . $filename);

        if (file_exists($path)) {
            return response()->download($path, $filename);
        } else {
            return response()->json(['error' => 'File not found.']);
        }
    }
}
