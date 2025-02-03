<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();
            $table->bigInteger('category_id');
            $table->bigInteger('country_id');
            $table->bigInteger('phone_country_id');
            $table->bigInteger('whatsapp_country_id');
            $table->string('title');
            $table->string('organisateur');
            $table->string('ville');
            $table->string('commune')->nullable();
            $table->string('adresse')->nullable();
            $table->string('map')->nullable();
            $table->text('site')->nullable();
            $table->date('debut');
            $table->date('fin')->nullable();
            $table->time('heure_debut');
            $table->time('heure_fin');
            $table->string('phone');
            $table->string('whatsapp');
            $table->string('email');
            $table->text('description');
            $table->text('facebook')->nullable();
            $table->text('instagram')->nullable();
            $table->text('tweeter')->nullable();
            $table->integer('status')->default(0);
            $table->integer('validated')->default(0);
            $table->string('created_by');
            $table->string('validated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
