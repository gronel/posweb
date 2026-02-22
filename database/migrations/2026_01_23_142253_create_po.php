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
            $table->string('pocode', 50)->unique();
            $table->integer('povendor',)->nullable();
            $table->dateTime('orderdte',)->nullable();
            $table->dateTime('shippingdte',)->nullable();
            $table->dateTime('closeddte',)->nullable();
            $table->decimal('totalcost', 18, 5)->nullable();
            $table->string('status', 10)->nullable();
            $table->string('porefno', 50)->nullable();
            $table->timestamps();
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
