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
        Schema::create('po', function (Blueprint $table) {
            $table->id();
            $table->string('poCode', 50)->unique();
            $table->integer('poVendor',)->nullable();
            $table->dateTime('orderDte',)->nullable();
            $table->dateTime('shippingDte',)->nullable();
            $table->dateTime('closedDte',)->nullable();
            $table->decimal('totalCost', 18, 5)->nullable();
            $table->string('status', 10)->nullable();
            $table->string('poRefNo', 50)->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('po');
    }
};
