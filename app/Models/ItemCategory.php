<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemCategory extends Model
{
    protected $table = 'item_category';

    protected $fillable = [
        'itemcategory',
        'description',
    ];

    /**
     * Get the items for this category.
     */
    public function items()
    {
        return $this->hasMany(Item::class, 'itemcategoryid', 'id');
    }
}
