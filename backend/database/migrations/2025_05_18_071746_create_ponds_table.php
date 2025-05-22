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
       Schema::create('ponds', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->text('location');
   $table->string('size')->change(); // size in square meters
    $table->unsignedBigInteger('user_id'); // owner
    $table->timestamps();

    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ponds');
    }
};
