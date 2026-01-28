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
        return $this->hasMany(CustomerPaymentTerm::class, 'CustomerId', 'id');
    }

    /**
     * Get the return orders for this customer.
     */
    public function returnOrders()
    {
        return $this->hasMany(Returnn::class, 'CustomerId', 'id');
    }

    /**
     * Get the sale return orders for this customer.
     */
    public function saleReturns()
    {
        return $this->hasMany(Sr::class, 'CustomerId', 'id');
    }
}