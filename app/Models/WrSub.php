<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WrSub extends Model
{
    protected $table = 'wr_sub';

    /**
     * Get the goods return that owns this line item.
     */
    public function wr()
    {
        return $this->belongsTo(Wr::class, 'wrId', 'wrld');
    }

    /**
     * Get the item for this line item.
     */
    public function item()
    {
        return $this->belongsTo(Item::class, 'ItemId', 'ItemId');
    }
}
