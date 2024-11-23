<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Symfony\Component\HttpFoundation\Response;

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
            'password' => ['required', 'confirmed', Password::min(6)->letters()->symbols()->numbers()],
            'type' => 'required|in:0,1',
        ];
    }

    // Envoie de la réponse en JSON
    public function wantsJson()
    {
        return true;
    }

    // Désactivation de la redirection en cas d'erreur
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'message' => 'Les données fournies sont invalides.',
                'data' => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY)
        );
    }
}
