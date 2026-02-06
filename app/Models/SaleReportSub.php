<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SaleReportSub extends Model
{
    protected $table = 'sr_sub';

    /**
     * Get the sale return that owns this line item.
     */
    public function saleReport()
    {
        return $this->belongsTo(SaleReport::class, 'srId', 'id');
    }

    /**
     * Get the item for this line item.
     */
    public function item()
    {
        return $this->belongsTo(Item::class, 'id', 'itemId');
    }
}
