<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
        //dd('ok');
        return [
            'name' => 'required|max:100',
            'lastname' => 'required|max:100',
            'phone' => 'required|min:6|unique:clients,phone',
            'email' => 'required|email|unique:clients,email',
            'password' => 'required|confirmed',
            'type' => 'required|in:0,1',
        ];
    }
}
