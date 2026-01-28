<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'item';

    /**
     * Get the category that owns this item.
     */
    public function category()
    {
        return $this->belongsTo(ItemCategory::class, 'ItemCategoryId', 'ItemCategoryId');
    }

    /**
     * Get the location that owns this item.
     */
    public function location()
    {
        return $this->belongsTo(Location::class, 'LocationId', 'id');
    }
}
