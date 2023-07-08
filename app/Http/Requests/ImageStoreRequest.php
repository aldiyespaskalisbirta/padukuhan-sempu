<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImageStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {

            return [
                'title' => 'required|string|max:258',
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'description' => 'required|string',
            ];
        } else {
            return [
                'title' => 'required|string|max:258',
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'description' => 'required|string',
            ];
        }
    }

    public function messages()
    {
        if (request()->isMethod('post')) {
            return [
                'title.required' => 'Title is required!',
                'description.required' => 'Description is required!',
                'image.required' => 'Image is required!',
            ];
        } else {
            return [
                'title.required' => 'Title is required!',
                'description.required' => 'Description is required!',
            ];
        }
    }
}
