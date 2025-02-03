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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lastname');
            $table->string('email')->unique();
            $table->string('phone');
            $table->integer('country_id');
            $table->integer('type');
            $table->string('city');
            $table->string('state');
            $table->string('address');
            // $table->integer('image_id');
            // $table->integer('identity_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer('status')->default(0);
            $table->integer('validation_status')->default(0);
            $table->date('validation_date')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
