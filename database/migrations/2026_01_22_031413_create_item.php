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
            $table->string('itemCode', 150)->unique();
            $table->string('itemName', 50)->nullable ();
            $table->string('itemDescription', 100)->nullable();
            $table->integer('locationId');
            $table->integer('itemCategoryId');
            $table->string('brandType', 100)->nullable();
            $table->string('uom', 15)->nullable();
            $table->integer('stockLevelQty',)->nullable();
            $table->integer('stackOh',)->nullable();
            $table->integer('isActive',)->nullable();
            $table->string('itemImg',)->nullable();
            $table->decimal('costPrice', 18, 5)->nullable();
            $table->decimal('sellingPrice', 18, 5)->nullable();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
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
