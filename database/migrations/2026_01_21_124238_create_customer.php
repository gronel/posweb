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
        Schema::create('customer', function (Blueprint $table) {
            $table->id();
            $table->string('customercode', 50)->unique();
            $table->string('customername', 100);
            $table->string('contactnumber', 50)->nullable();
            $table->string('contactperson', 100)->nullable();
            $table->string('email', 50)->nullable();
            $table->integer('termid');
            $table->integer('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer');
    }
};
