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
            $table->integer('customerid');
            $table->decimal('cash', 18, 5)->nullable();
            $table->decimal('totalamt', 18, 5)->nullable();
            $table->decimal('change', 18, 5)->nullable();
            $table->string('createdby', 30)->nullable();
            $table->dateTime('createddte',)->nullable();
            $table->integer('isposted',)->nullable();
            $table->integer('postedid')->nullable();
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
