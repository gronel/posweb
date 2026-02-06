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
        Schema::create('return_sub', function (Blueprint $table) {
            $table->id();
            $table->integer('returnId');
            $table->integer('itemId');
            $table->integer('qty');
            $table->decimal('unitPrice', 18, 5)->nullable();
            $table->decimal('amount', 18, 5)->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('return_sub');
    }
};
