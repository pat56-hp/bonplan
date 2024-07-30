<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EtablissementResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'libelle' => $this->libelle,
            'ville' => $this->ville,
            'adresse' => $this->adresse,
            'phone' => $this->phone,
            'email' => $this->email,
            'facebook' => $this->facebook,
            'instagram' => $this->instagram,
            'total_image' => $this->withCount('galleries'),
            'created_at' => $this->created_at->format('d/m/Y à H:m')
        ];
    }
}
