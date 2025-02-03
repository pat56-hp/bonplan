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
        Schema::create('pictures', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('status')->default(1);
            $table->integer('user_id');
            $table->integer('first')->default(0);
            $table->integer('endroit_id')->nullable();
            $table->integer('user_identity_id')->nullable();
            $table->integer('type')->default(0);
            $table->integer('article_id')->nullable();
            $table->integer('event_id')->nullable();
            $table->integer('offer_id')->nullable();
            $table->integer('publisher_id')->nullable();
            $table->integer('commodity_id')->nullable();
            $table->integer('entreprise_id')->nullable();
            $table->string('created_by');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pictures');
    }
};
