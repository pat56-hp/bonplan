<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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
            'category_id' => $this->category_id,
            'category' => $this->category?->title,
            'category_icon' => $this->category?->icon,
            'titre' => $this->titre,
            'organisateur' => $this->organisateur,
            'adresse' => $this->adresse,
            'longitude' => $this->longitude,
            'latitude' => $this->latitude,
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
