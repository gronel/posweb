<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReturnSub extends Model
{
    protected $table = 'return_sub';

    /**
     * Get the return that owns this line item.
     */
    public function returnn()
    {
        return $this->belongsTo(Returnn::class, 'returnId', 'returnId');
    }

    /**
     * Get the item for this line item.
     */
    public function item()
    {
        return $this->belongsTo(Item::class, 'ItemId', 'ItemId');
    }
}
