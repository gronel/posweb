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
        Schema::create('menu_master', function (Blueprint $table) {
            $table->id();
            $table->string('menutext', 30);
            $table->string('parentmenuid',);
            $table->integer('menuorder',);
            $table->string('formname', 50)->nullable();
            $table->string('imagename', 20)->nullable();
            $table->string('createdby', 50)->nullable();
            $table->dateTime('createddte',)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_master');
    }
};
