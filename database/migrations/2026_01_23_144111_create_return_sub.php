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
            $table->integer('returnid');
            $table->integer('itemid');
            $table->integer('qty');
            $table->decimal('unitprice', 18, 5)->nullable();
            $table->decimal('amount', 18, 5)->nullable();
            $table->timestamps();
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
