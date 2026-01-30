<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SaleReport extends Model
{
    protected $table = 'sr';

    /**
     * Get the customer that owns this sale return.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'CustomerId', 'id');
    }

    /**
     * Get the sale return line items for this SR.
     */
    public function subItems()
    {
        return $this->hasMany(SrSub::class, 'SRId', 'SRId');
    }
}
