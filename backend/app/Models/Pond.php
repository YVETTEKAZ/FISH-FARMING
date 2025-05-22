<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pond extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'location',
        'size',
        'fish_species_id',
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function fishSpecies()
{
    return $this->belongsToMany(FishSpecies::class, 'pond_fish');
}

}
