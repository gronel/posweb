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
        Schema::create('printer', function (Blueprint $table) {
            $table->id();
            $table->string('printerName', 50);
            $table->decimal('printerOrder', 10, 2)->default(0)->nullable();
            $table->string('printerPrintServer', 50)->nullable();
            $table->string('printerPrintPort', 100)->nullable();
            $table->string('printerAccessType', 100)->nullable();
            $table->string('printerUsername', 100)->nullable();
            $table->string('printerPassword', 100)->nullable();
            $table->string('printerShellExec', 100)->nullable();
            $table->string('printerActive', 100)->nullable();
            $table->string('printerUnit', 100)->nullable();
            $table->string('printerLabels', 100)->nullable();
            $table->string('printerDensity', 100)->nullable();
            $table->string('printerDpi', 100)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('printer');
    }
};
