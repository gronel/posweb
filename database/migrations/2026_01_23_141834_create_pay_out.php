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
            $table->integer('PayId',);
            $table->string('Purpose', 300)->nullable();
            $table->decimal('Amount', 18, 5)->nullable();
            $table->string('CreatedBy', 20)->nullable();
            $table->dateTime('CreatedDTe',)->nullable();
            $table->string('ModifyBy', 20)->nullable();
            $table->dateTime('ModifyDTe',)->nullable();
            $table->timestamps();
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
