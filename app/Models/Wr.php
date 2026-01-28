<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wr extends Model
{
    protected $table = 'wr';

    /**
     * Get the supplier that owns this goods return.
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'SupplierId', 'id');
    }

    /**
     * Get the goods return line items for this WR.
     */
    public function subItems()
    {
        return $this->hasMany(WrSub::class, 'wrId', 'wrld');
    }
}
