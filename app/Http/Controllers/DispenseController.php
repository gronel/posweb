<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DispenseController extends Controller
{
    public function index(Request $request)
    {
        $items = Item::with(['location', 'category'])
            ->latest()
            ->paginate(12)
            ->through(fn ($item) => [
                'id' => $item->id,
                'itemcode' => $item->itemcode,
                'itemname' => $item->itemname,
                'location' => $item->location?->location,
                'category' => $item->category?->itemcategory,
                'stocklevelqty' => $item->stocklevelqty,
                'stackoh' => $item->stackoh,
                'uom' => $item->uom,
                'sellingprice' => $item->sellingprice,
                'isactive' => $item->isactive,
            ]);

        return Inertia::render('Dispense/Index', [
            'items' => $items,
            'summary' => [
                'total_items' => Item::count(),
                'total_stock_qty' => Item::sum('stocklevelqty'),
                'active_items' => Item::where('isactive', true)->count(),
                'inactive_items' => Item::where('isactive', false)->count(),
            ],
        ]);
    }
}
