<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EtablissementRequest extends FormRequest
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
        return [
            'libelle' => 'required|max:150',
            'client' => 'required|integer',
            'categorie' => 'required|integer',
            'email' => 'sometimes|email|max:50',
            'phone' => 'required|max:50',
            'ville' => 'required|max:150',
            'adresse' => 'required|max:150',
            'facebook' => 'sometimes|max:150',
            'instagram' => 'sometimes|max:150',
            'image' => 'required',
            'description' => 'required',
            'jour.*' => 'required',
            'ouverture.*' => 'required',
            'fermeture.*' => 'required',
            'commodite.*' => 'required',
        ];
    }
}
