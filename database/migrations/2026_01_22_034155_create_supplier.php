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
        Schema::create('supplier', function (Blueprint $table) {
            $table->id();
            $table->integer('SupplierID');
            $table->string('SupplierName', 200)->nullable();
            $table->string('Address', 200)->nullable();
            $table->string('TelNo', 50)->nullable();
            $table->string('FaxNo', 50)->nullable();
            $table->string('Cellno', 50)->nullable();
            $table->string('Website', 50)->nullable();
            $table->string('Accreditation', 50)->nullable();
            $table->string('SupplierType', 50)->nullable();
            $table->string('ComCategory', 50)->nullable();
            $table->string('PayTerms', 50)->nullable();
            $table->string('ContactName', 50)->nullable();
            $table->string('Designation', 50)->nullable();
            $table->string('Department', 50)->nullable();
            $table->string('Email', 50)->nullable();
            $table->string('Remarks', 500)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('supplier');
    }
};
