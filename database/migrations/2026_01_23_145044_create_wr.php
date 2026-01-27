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
        Schema::create('wr', function (Blueprint $table) {
            $table->id();
            $table->string('wrld', 30);
            $table->string('wrComments', 300)->nullable();
            $table->decimal('wrTotalCost', 18, 5)->nullable();
            $table->string('CreatedBy', 20)->nullable();
            $table->dateTime('CreatedDTe',)->nullable();
            $table->integer('isPosted',)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wr');
    }
};
