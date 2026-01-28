<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PO extends Model
{
    protected $table = 'po';

    /**
     * Get the company that owns this purchase order.
     */
    public function company()
    {
        return $this->belongsTo(Companies::class, 'CompanyId', 'id');
    }

    /**
     * Get the supplier for this purchase order.
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'SupplierId', 'id');
    }

    /**
     * Get the purchase order line items for this PO.
     */
    public function subItems()
    {
        return $this->hasMany(POSub::class, 'poCode', 'poCode');
    }

    /**
     * Get the delivery receipts for this PO.
     */
    public function deliveryReceipts()
    {
        return $this->hasMany(DeliveryReciept::class, 'pocode', 'poCode');
    }
}
