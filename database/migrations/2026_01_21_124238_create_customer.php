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
        Schema::create('customer', function (Blueprint $table) {
            $table->id();
            $table->string('CustomerCode', 50)->unique();
            $table->string('CustomerName', 100);
            $table->string('ContactNumber', 50)->nullable();
            $table->string('ContactPerson', 100)->nullable();
            $table->string('Email', 50)->nullable();
            $table->integer('Status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer');
    }
};
