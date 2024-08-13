<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'titre' => 'required|max:255',
            'category' => 'required|integer',
            'organisateur' => 'required|max:100',
            'adresse' => 'required|max:255',
            'debut' => 'required|date|before_or_equal:fin',
            'fin' => 'required|date|after_or_equal:debut',
            'contact' => 'required',
            'description' => 'required',
            'gallery' => ['nullable', function($attribution, $value, $fail){
                foreach ($value as $file) {
                    if (!in_array($file->extension(), ['jpg', 'png', 'jpeg'])) {
                        $fail($attribution, ' contient des extensions invalides.');
                    }
                }
            }]
        ];

        if (request()->method() === 'PUT' || request()->method() === 'PATCH') {
            if (request()->hasFile('image')) {
                $rules['image'] = 'nullable|image|mimes:png,jpg,jpeg';
            }
        }else{
            $rules['image'] = 'required|image|mimes:png,jpg,jpeg';
        }

        return $rules;
    }
}
