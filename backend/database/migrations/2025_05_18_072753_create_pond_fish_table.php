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
       Schema::create('pond_fish', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('pond_id');
    $table->unsignedBigInteger('fish_species_id');
    $table->integer('quantity')->default(0);
    $table->timestamps();

    $table->foreign('pond_id')->references('id')->on('ponds')->onDelete('cascade');
    $table->foreign('fish_species_id')->references('id')->on('fish_species')->onDelete('cascade');
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pond_fish');
    }
};
