<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DisposeController extends Controller
{
    public function index(Request $request)
    {
        $disposedItems = Item::with(['location', 'category'])
            ->where('isactive', false)
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
                'costprice' => $item->costprice,
                'sellingprice' => $item->sellingprice,
            ]);

        return Inertia::render('Dispose/Index', [
            'disposedItems' => $disposedItems,
            'summary' => [
                'total_disposed' => $disposedItems->total(),
                'total_quantity' => $disposedItems->sum('stocklevelqty'),
                'categories' => $disposedItems->groupBy('category')->map->count(),
            ],
        ]);
    }
}
