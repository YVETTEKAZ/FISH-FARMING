<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('ponds', function (Blueprint $table) {
            $table->foreignId('farmer_id')->constrained('users')->onDelete('cascade')->after('id');
            $table->string('name')->after('farmer_id');
            $table->string('location')->nullable()->after('name');
            $table->json('water_quality')->nullable()->after('location');
        });
    }

    public function down(): void
    {
        Schema::table('ponds', function (Blueprint $table) {
            $table->dropForeign(['farmer_id']);
            $table->dropColumn(['farmer_id', 'name', 'location', 'water_quality']);
        });
    }
};