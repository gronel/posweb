<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerPaymentTerm extends Model
{
    protected $table = 'customer_paymentterm';

    /**
     * Get the customer that owns this payment term.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'CustomerId', 'id');
    }
}