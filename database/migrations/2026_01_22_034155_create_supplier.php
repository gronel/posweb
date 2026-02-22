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
            $table->string('suppliername', 200)->nullable();
            $table->string('address', 200)->nullable();
            $table->string('telno', 50)->nullable();
            $table->string('faxno', 50)->nullable();
            $table->string('cellno', 50)->nullable();
            $table->string('website', 50)->nullable();
            $table->string('accreditation', 50)->nullable();
            $table->integer('suppliertype');
            $table->integer('comcategory');
            $table->integer('payterms');
            $table->string('contactname', 50)->nullable();
            $table->string('designation', 50)->nullable();
            $table->string('department', 50)->nullable();
            $table->string('email', 50)->nullable();
            $table->string('remarks', 500)->nullable();
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
