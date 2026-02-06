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
            $table->string('supplierName', 200)->nullable();
            $table->string('address', 200)->nullable();
            $table->string('telNo', 50)->nullable();
            $table->string('faxNo', 50)->nullable();
            $table->string('cellNo', 50)->nullable();
            $table->string('website', 50)->nullable();
            $table->string('accreditation', 50)->nullable();
            $table->integer('supplierType');
            $table->integer('comCategory');
            $table->integer('payTerms');
            $table->string('contactName', 50)->nullable();
            $table->string('designation', 50)->nullable();
            $table->string('department', 50)->nullable();
            $table->string('email', 50)->nullable();
            $table->string('remarks', 500)->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
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
