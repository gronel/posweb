<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Returnn extends Model
{
    protected $table = 'return';

    /**
     * Get the customer that owns this return.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'CustomerId', 'id');
    }

    /**
     * Get the return line items for this return.
     */
    public function subItems()
    {
        return $this->hasMany(ReturnSub::class, 'returnId', 'returnId');
    }
}