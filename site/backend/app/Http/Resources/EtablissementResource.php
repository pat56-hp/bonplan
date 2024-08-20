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
            'category' => $this->category?->libelle,
            'category_icon' => $this->category?->icon,
            'commodites' => $this->commodites,
            'libelle' => $this->libelle,
            'ville' => $this->ville,
            'adresse' => $this->adresse,
            'longitude' => $this->longitude,
            'latitude' => $this->latitude,
            'phone' => $this->phone,
            'email' => $this->email,
            'facebook' => $this->facebook,
            'instagram' => $this->instagram,
            'image' => $this->image,
            'status' => $this->status,
            'validate' => $this->validate,
            'description' => $this->description,
            'total_image' => $this->galleries->count(),
            'open' => $this->open,
            'favoris' => $this->isFavorite,
            'note' => $this->note,
            'created_at' => $this->created_at->diffForHumans()
        ];
    }
}
