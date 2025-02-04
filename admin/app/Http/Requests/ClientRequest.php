<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
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
            'type' => 'required',
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => [
                'required', 
                'string', 
                'email', 
                'max:255', 
                $this->method() === 'POST' ? 'unique:clients' : '',
            ],
            'phone' => [
                'required',
                $this->method() === 'POST' ? 'unique:clients' : '',
                'string',
                'max:255'
            ],
            'adresse' => 'nullable|string|max:255',
            'image' => 'required',
            'password' => [
                $this->method() === 'POST' ? 'required' : 'nullable',
                'string',
                'min:6'
            ]
        ];
    }
}
