<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierType extends Model
{
    protected $table = 'supplier_type';

    /**
     * Get the suppliers for this type.
     */
    public function suppliers()
    {
        return $this->hasMany(Supplier::class, 'SupplierTypeId', 'id');
    }
}