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
        Schema::create('item', function (Blueprint $table) {
            $table->id();
            $table->string('itemcode', 150)->unique();
            $table->string('itemname', 50);
            $table->string('itemdescription', 100)->nullable();
            $table->integer('locationid');
            $table->integer('itemcategoryid');
            $table->string('brandtype', 100)->nullable();
            $table->string('uom', 15)->nullable();
            $table->integer('stocklevelqty',)->nullable();
            $table->integer('stackoh',)->nullable();
            $table->integer('isactive',)->nullable();
            $table->string('itemimg',)->nullable();
            $table->decimal('costprice', 18, 5)->nullable();
            $table->decimal('sellingprice', 18, 5)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item');
    }
};
