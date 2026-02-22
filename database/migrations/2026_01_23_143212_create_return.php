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
        Schema::create('return', function (Blueprint $table) {
            $table->id();
            $table->dateTime('returndate',)->nullable();
            $table->string('comments', 300)->nullable();
            $table->string('createdby', 20)->nullable();
            $table->dateTime('createddate',)->nullable();
            $table->integer('isposted',)->nullable();
            $table->decimal('totalamount', 18, 5)->nullable();
            $table->integer('action')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('return');
    }
};
