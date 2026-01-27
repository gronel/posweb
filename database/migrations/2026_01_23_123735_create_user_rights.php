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
        Schema::create('user_rights', function (Blueprint $table) {
            $table->id();
            $table->integer('UserId');
            $table->integer('MenuId');
            $table->integer('canAdd')->nullable();
            $table->integer('canEdit')->nullable();
            $table->integer('canDelete')->nullable();
            $table->integer('canPreview')->nullable();
            $table->integer('canPrint')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_rights');
    }
};
