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
            $table->string('printerType', 50);
            $table->string('printerOrder', 100);
            $table->string('printerPrintServer', 50);
            $table->string('printerPrintPort', 100);
            $table->string('printerAccessType', 100);
            $table->string('printerUsername', 100);
            $table->string('printerPassword', 100);
            $table->string('printerShellExec', 100);
            $table->string('printerActive', 100);
            $table->string('printerUnit', 100);
            $table->string('printerLabels', 100);
            $table->string('printerDensity', 100);
            $table->string('printerDpi', 100);
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
