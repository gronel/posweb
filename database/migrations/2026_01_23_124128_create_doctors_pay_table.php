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
            $table ->integer('DoctorId', 30)->nullable();
            $table->string('Patient', 30)->nullable();
            $table->decimal('Payable', 18, 5)->nullable();
            $table->string('remarks', 200)->nullable();
            $table->string('createdBy', 20)->nullable();
            $table->dateTime('createdDTe',)->nullable();
            $table->string('modifyBy', 20)->nullable();
            $table->dateTime('modifyDTe',)->nullable();
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
