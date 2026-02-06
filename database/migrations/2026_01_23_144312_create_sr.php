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
            $table->integer('customerId');
            $table->decimal('cash', 18, 5)->nullable();
            $table->decimal('totalAmt', 18, 5)->nullable();
            $table->decimal('change', 18, 5)->nullable();
            $table->string('createdBy', 30)->nullable();
            $table->dateTime('createdDte',)->nullable();
            $table->integer('isPosted',)->nullable();
            $table->integer('postedId')->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
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
