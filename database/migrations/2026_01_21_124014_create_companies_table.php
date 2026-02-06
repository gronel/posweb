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
        Schema::create('companies', function (Blueprint $table) {
            $table->id('CompanyID');
            $table->string('CompanyName', 50);
            $table->string('Address', 150)->nullable();
            $table->string('Phone', 50)->nullable();
            $table->string('Fax', 50)->nullable();
            $table->string('Email', 50)->nullable();
            $table->string('Website', 50)->nullable();
            $table->string('Logo')->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
