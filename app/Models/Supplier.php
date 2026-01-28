<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    protected $table = 'supplier';

    /**
     * Get the supplier type for this supplier.
     */
    public function type()
    {
        return $this->belongsTo(SupplierType::class, 'SupplierTypeId', 'id');
    }

    /**
     * Get the payment terms for this supplier.
     */
    public function paymentTerms()
    {
        return $this->hasMany(SupplierPayTerms::class, 'SupplierId', 'id');
    }

    /**
     * Get the commodity categories for this supplier.
     */
    public function commodityCategories()
    {
        return $this->hasMany(SupplierComCategory::class, 'SupplierId', 'id');
    }

    /**
     * Get the purchase orders for this supplier.
     */
    public function purchaseOrders()
    {
        return $this->hasMany(PO::class, 'SupplierId', 'id');
    }

    /**
     * Get the goods return orders for this supplier.
     */
    public function goodsReturns()
    {
        return $this->hasMany(Wr::class, 'SupplierId', 'id');
    }
}