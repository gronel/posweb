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
            $table->string('menuText', 30);
            $table->string('parentMenuId',);
            $table->integer('menuOrder',);
            $table->string('formName', 50)->nullable();
            $table->string('imageName', 20)->nullable();
            $table->string('createdBy', 50)->nullable();
            $table->dateTime('createdDte',)->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
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
