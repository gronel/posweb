<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = 'location';

    /**
     * Get the items for this location.
     */
    public function items()
    {
        return $this->hasMany(Item::class, 'LocationId', 'id');
    }
}
