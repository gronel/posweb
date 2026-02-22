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
        Schema::create('supplier_payterms', function (Blueprint $table) {
            $table->id();
            $table->string('paytermscode', 20)->unique();
            $table->string('paytermname', 100);
            $table->integer('noofdays')->nullable();
            $table->timestamp('createdat')->nullable();
            $table->timestamp('updatedat')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('supplier_payterms');
    }
};
