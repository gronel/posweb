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
        Schema::create('po_sub', function (Blueprint $table) {
            $table->id();
            $table->integer('poid');
            $table->integer('itemid');
            $table->integer('poqty',)->nullable();
            $table->decimal('pocost', 18, 5)->nullable();
            $table->decimal('poamount', 18, 5)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('po_sub');
    }
};
