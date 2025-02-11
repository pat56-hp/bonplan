<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EtablissementFormRequest extends FormRequest
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
            'libelle' => 'required|max:100',
            'ville' => 'required|max:100',
            'adresse' => 'required|max:255',
            'phone' => 'required|min:5',
            'category' => 'required|integer',
            'gallerie' => ['nullable', function ($attribute, $value, $fail) {
                foreach ($value as $file) {
                    if (!in_array($file->extension(), ['jpg', 'png', 'jpeg'])) {
                        $fail($attribute . ' contient des extensions invalides.');
                    }
                }
            }],
            'description' => 'required',
        ];

        if (request()->method() === 'PUT') {
            if (request()->hasFile('image')) {
                $rules['image'] = 'nullable|image|mimes:png,jpg,jpeg';
            }
        } else {
            $rules['image'] = 'required|image|mimes:png,jpg,jpeg';
        }

        return $rules;
    }

}
