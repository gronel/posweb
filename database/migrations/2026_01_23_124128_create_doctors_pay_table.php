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
        Schema::create('doctors_pay', function (Blueprint $table) {
            $table->id();
            $table->string('patient', 30)->nullable();
            $table->decimal('payable', 18, 5)->nullable();
            $table->string('remarks', 200)->nullable();
            $table->string('createdby', 20)->nullable();
            $table->dateTime('createddte',)->nullable();
            $table->string('modifyby', 20)->nullable();
            $table->dateTime('modifydte',)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dortor_pays');
    }
};
