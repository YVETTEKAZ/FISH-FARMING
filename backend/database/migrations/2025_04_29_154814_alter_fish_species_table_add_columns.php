<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('fish_species', function (Blueprint $table) {
            $table->string('name')->after('id');
            $table->text('description')->nullable()->after('name');
            $table->text('growth_conditions')->nullable()->after('description');
            $table->text('locations')->nullable()->after('growth_conditions');
        });
    }

    public function down(): void
    {
        Schema::table('fish_species', function (Blueprint $table) {
            $table->dropColumn(['name', 'description', 'growth_conditions', 'locations']);
        });
    }
};