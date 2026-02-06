<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customer';

    /**
     * Get the payment terms for this customer.
     */
    public function paymentTerms()
    {
        return $this->hasOne(CustomerPaymentTerm::class, 'id', 'termId');
    }

 
    /**
     * Get the sale return orders for this customer.
     */
    public function saleReturns()
    {
        return $this->hasMany(Sr::class, 'customerId', 'id');
    }
}