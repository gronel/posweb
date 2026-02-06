<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class POSub extends Model
{
    protected $table = 'po_sub';

    /**
     * Get the purchase order that owns this line item.
     */
    public function po()
    {
        return $this->belongsTo(PO::class, 'poCode', 'poCode');
    }

    /**
     * Get the item for this line item.
     */
    public function item()
    {
        return $this->belongsTo(Item::class, 'ItemId', 'ItemId');
    }
}
