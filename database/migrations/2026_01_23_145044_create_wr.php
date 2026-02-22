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
            $table->string('wrcomments', 300)->nullable();
            $table->decimal('wrtotalcost', 18, 5)->nullable();
            $table->string('createdby', 20)->nullable();
            $table->dateTime('createddte',)->nullable();
            $table->integer('isposted',)->nullable();
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
