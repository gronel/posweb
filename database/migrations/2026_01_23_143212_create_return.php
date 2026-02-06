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
        Schema::create('return', function (Blueprint $table) {
            $table->id();
            $table->dateTime('returnDate',)->nullable();
            $table->string('comments', 300)->nullable();
            $table->string('createdBy', 20)->nullable();
            $table->dateTime('createdDate',)->nullable();
            $table->integer('isPosted',)->nullable();
            $table->decimal('totalAmount', 18, 5)->nullable();
            $table->integer('action')->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('return');
    }
};
