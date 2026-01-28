<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierPayTerms extends Model
{
    protected $table = 'supplier_payterms';

    /**
     * Get the supplier that owns these payment terms.
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'SupplierId', 'id');
    }
}