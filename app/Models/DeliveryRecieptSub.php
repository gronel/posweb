<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryRecieptSub extends Model
{
    protected $table = 'delivery_reciept_sub';

    /**
     * Get the delivery receipt that owns this line item.
     */
    public function deliveryReciept()
    {
        return $this->belongsTo(DeliveryReciept::class, 'DrCode', 'DrCode');
    }

    /**
     * Get the item for this line item.
     */
    public function item()
    {
        return $this->belongsTo(Item::class, 'ItemId', 'ItemId');
    }
}
