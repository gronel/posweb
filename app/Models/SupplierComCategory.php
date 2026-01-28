<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierComCategory extends Model
{
    protected $table = 'supplier_comcategory';

    /**
     * Get the supplier that owns this commodity category.
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'SupplierId', 'id');
    }
}