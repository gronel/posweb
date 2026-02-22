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
        Schema::create('delivery_reciept_sub', function (Blueprint $table) {
            $table->id();
            $table->integer('drqty')->nullable();
            $table->decimal('drcost', 18, 5)->nullable();
            $table->decimal('dramount', 18, 5)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_reciept_sub');
    }
};
