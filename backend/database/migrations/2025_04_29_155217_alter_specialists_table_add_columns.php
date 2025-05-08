<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('specialists', function (Blueprint $table) {
            $table->string('name')->after('id');
            $table->string('phone')->after('name');
            $table->string('email')->nullable()->after('phone');
            $table->string('expertise')->nullable()->after('email');
        });
    }

    public function down(): void
    {
        Schema::table('specialists', function (Blueprint $table) {
            $table->dropColumn(['name', 'phone', 'email', 'expertise']);
        });
    }
};