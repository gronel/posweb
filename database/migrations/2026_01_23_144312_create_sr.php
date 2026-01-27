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
        Schema::create('sr', function (Blueprint $table) {
            $table->id();
            $table->string('SRId', 30);
            $table->string('Customer', 20)->nullable();
            $table->decimal('Cash', 18, 5)->nullable();
            $table->decimal('TotalAmt', 18, 5)->nullable();
            $table->decimal('Change', 18, 5)->nullable();
            $table->string('CreatedBy', 30)->nullable();
            $table->dateTime('CreatedDTe',)->nullable();
            $table->integer('isPosted',)->nullable();
            $table->integer('PostedId')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sr');
    }
};
