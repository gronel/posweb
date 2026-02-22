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
        Schema::dropIfExists('pay_out');
    }
};
