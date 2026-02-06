<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryReciept extends Model
{
    protected $table = 'delivery_reciept';

    /**
     * Get the purchase order for this delivery receipt.
     */
    public function po()
    {
        return $this->belongsTo(PO::class, 'pocode', 'poCode');
    }

    /**
     * Get the delivery receipt line items.
     */
    public function subItems()
    {
        return $this->hasMany(DeliveryRecieptSub::class, 'DrCode', 'DrCode');
    }
}
