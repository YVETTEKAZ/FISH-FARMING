<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FishSpecies extends Model
{
    use HasFactory;

    protected $fillable = [
    'name',
    'description',
    'image',
    'growth_time',
    'environment',
    'feed_type',
    ];

    // Relationships
  public function ponds()
{
    return $this->belongsToMany(Pond::class, 'pond_fish');
}

}
