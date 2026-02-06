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
        Schema::create('pay_out', function (Blueprint $table) {
            $table->id();
            $table->string('purpose', 300)->nullable();
            $table->decimal('amount', 18, 5)->nullable();
            $table->string('createdBy', 20)->nullable();
            $table->dateTime('createdDte',)->nullable();
            $table->string('modifyBy', 20)->nullable();
            $table->dateTime('modifyDte',)->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pay_out');
    }
};
