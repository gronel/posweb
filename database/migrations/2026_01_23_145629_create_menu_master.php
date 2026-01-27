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
            $table->integer('MenuID',);
            $table->string('MenuText', 30);
            $table->string('ParentMenuID',);
            $table->integer('MenuOrder',);
            $table->string('FormName', 50)->nullable();
            $table->string('ImageName', 20)->nullable();
            $table->string('CreatedBy', 50)->nullable();
            $table->dateTime('CreatedDTe',)->nullable();
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
