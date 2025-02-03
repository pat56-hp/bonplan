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
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('subtitle')->nullable();
            $table->string('image');
            $table->integer('btn_first')->default(0);
            $table->string('btn_first_title')->nullable();
            $table->string('btn_first_url')->nullable();
            $table->integer('btn_second')->default(0);
            $table->string('btn_second_title')->nullable();
            $table->string('btn_second_url')->nullable();
            $table->integer('statut');
            $table->string('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
