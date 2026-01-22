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
            $table->string('ItemCode', 100);
            $table->string('ItemName', 300)->nullable ();
            $table->string('ItemDescription', 200)->nullable();
            $table->integer('LocationId');
            $table->integer('ItemCategoryId');
            $table->string('BrandType', 100)->nullable();
            $table->string('UOM', 15)->nullable();
            $table->integer('StockLevelQTY',)->nullable();
            $table->integer('StackOH',)->nullable();
            $table->integer('isActive',)->nullable();
            $table->string('ItemImg',)->nullable();
            $table->decimal('CostPrice', 18, 5)->nullable();
            $table->decimal('SellingPrice', 18, 5)->nullable();
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
