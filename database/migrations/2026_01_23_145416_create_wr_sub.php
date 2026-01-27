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
        Schema::create('wr_sub', function (Blueprint $table) {
            $table->id();
            $table->string('wrId', 30);
            $table->integer('ItemId',);
            $table->integer('Qty');
            $table->decimal('Cost', 18, 5)->nullable();
            $table->decimal('Amount', 18, 5)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wr_sub');
    }
};
