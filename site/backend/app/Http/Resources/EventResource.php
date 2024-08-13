<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
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
            'category' => $this->category?->title,
            'titre' => $this->titre,
            'organisateur' => $this->organisateur,
            'adresse' => $this->adresse,
            'localisation_map' => $this->localisation_map,
            'image' => $this->image,
            'facebook' => $this->facebook,
            'instagram' => $this->instagram,
            'contact' => $this->contact,
            'whatsapp' => $this->whatsapp,
            'siteweb' => $this->siteweb,
            'email' => $this->email,
            'debut' => $this->debut,
            'fin' => $this->fin,
            'description' => $this->description,
            'status' => $this->status,
            'validate' => $this->validate,
            'total_gallerie' => $this->galleries->count(),
            'created_at' => $this->created_at->diffForHumans()
        ];
    }
}
