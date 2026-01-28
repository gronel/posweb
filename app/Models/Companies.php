<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Companies extends Model
{
    protected $table = 'companies';

    /**
     * Get all customers for this company.
     */
    public function customers()
    {
        return $this->hasMany(Customer::class, 'CompanyId', 'id');
    }

    /**
     * Get all suppliers for this company.
     */
    public function suppliers()
    {
        return $this->hasMany(Supplier::class, 'CompanyId', 'id');
    }

    /**
     * Get all items for this company.
     */
    public function items()
    {
        return $this->hasMany(Item::class, 'CompanyId', 'id');
    }

    /**
     * Get all locations for this company.
     */
    public function locations()
    {
        return $this->hasMany(Location::class, 'CompanyId', 'id');
    }

    /**
     * Get all purchase orders for this company.
     */
    public function purchaseOrders()
    {
        return $this->hasMany(PO::class, 'CompanyId', 'id');
    }
}