<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SrSub extends Model
{
    protected $table = 'sr_sub';

    /**
     * Get the sale return that owns this line item.
     */
    public function sr()
    {
        return $this->belongsTo(Sr::class, 'SRId', 'SRId');
    }

    /**
     * Get the item for this line item.
     */
    public function item()
    {
        return $this->belongsTo(Item::class, 'ItemId', 'ItemId');
    }
}
