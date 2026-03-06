<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'item';

    protected $fillable = [
        'itemcode',
        'itemname',
        'itemdescription',
        'locationid',
        'itemcategoryid',
        'brandtype',
        'uom',
        'stocklevelqty',
        'stackoh',
        'isactive',
        'itemimg',
        'costprice',
        'sellingprice',
    ];

    /**
     * Get the category that owns this item.
     */
    public function category()
    {
        return $this->belongsTo(ItemCategory::class, 'itemcategoryid', 'id');
    }

    /**
     * Get the location that owns this item.
     */
    public function location()
    {
        return $this->belongsTo(Location::class, 'locationid', 'id');
    }
}
