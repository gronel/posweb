<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemCategory;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::with(['location', 'category'])->latest()->paginate(10);

        return Inertia::render('Items/Index', [
            'items' => $items,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Items/Create', [
            'locations' => Location::orderBy('location')->get(),
            'categories' => ItemCategory::orderBy('itemcategory')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'itemcode' => 'required|string|max:150|unique:item,itemcode',
            'itemname' => 'nullable|string|max:50',
            'itemdescription' => 'nullable|string|max:100',
            'locationid' => 'required|exists:location,id',
            'itemcategoryid' => 'required|exists:item_category,id',
            'brandtype' => 'nullable|string|max:100',
            'uom' => 'nullable|string|max:15',
            'stocklevelqty' => 'nullable|integer',
            'stackoh' => 'nullable|integer',
            'isactive' => 'nullable|boolean',
            'itemimg' => 'nullable|string|max:255',
            'costprice' => 'nullable|numeric',
            'sellingprice' => 'nullable|numeric',
        ]);

        $validated['isactive'] = $request->has('isactive') ? (bool) $request->input('isactive') : false;

        Item::create($validated);

        return redirect()->route('items.index')
            ->with('success', 'Item created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        return Inertia::render('Items/Edit', [
            'item' => $item,
            'locations' => Location::orderBy('location')->get(),
            'categories' => ItemCategory::orderBy('itemcategory')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
        $validated = $request->validate([
            'itemcode' => 'required|string|max:150|unique:item,itemcode,' . $item->id,
            'itemname' => 'nullable|string|max:50',
            'itemdescription' => 'nullable|string|max:100',
            'locationid' => 'required|exists:location,id',
            'itemcategoryid' => 'required|exists:item_category,id',
            'brandtype' => 'nullable|string|max:100',
            'uom' => 'nullable|string|max:15',
            'stocklevelqty' => 'nullable|integer',
            'stackoh' => 'nullable|integer',
            'isactive' => 'nullable|boolean',
            'itemimg' => 'nullable|string|max:255',
            'costprice' => 'nullable|numeric',
            'sellingprice' => 'nullable|numeric',
        ]);

        $validated['isactive'] = $request->has('isactive') ? (bool) $request->input('isactive') : false;

        $item->update($validated);

        return redirect()->route('items.index')
            ->with('success', 'Item updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        $item->delete();

        return redirect()->route('items.index')
            ->with('success', 'Item deleted successfully.');
    }
}
