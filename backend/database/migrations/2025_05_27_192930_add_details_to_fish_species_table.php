<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up()
{
    Schema::table('fish_species', function (Blueprint $table) {
        $table->string('growth_time')->nullable();
        $table->string('environment')->nullable();
        $table->string('feed_type')->nullable();
    });
}

public function down()
{
    Schema::table('fish_species', function (Blueprint $table) {
        $table->dropColumn(['growth_time', 'environment', 'feed_type']);
    });
}
};
