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
        Schema::create('delivery_reciept', function (Blueprint $table) {
            $table->id();
            $table->string('pocode', 20);
            $table->integer('vendor',);
            $table->dateTime('drDate',)->nullable();
            $table->string('remarks', 200)->nullable();
            $table->decimal('totalCost', 18, 5)->nullable();
            $table->integer('isPosted',)->nullable();
            $table->string('createdBy', 20)->nullable();
            $table->dateTime('createdDTe',)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_reciept');
    }
};
