<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemPostRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use App\Models\ItemCategory;
use App\Models\Location;

class ItemController extends Controller
{
    public function index(Request $request)
    {
        $items = Item::with(['category', 'location'])->latest()->paginate(10);

        return Inertia::render('Items/Index', [
            'items' => $items,
        ]);
    }

    public function create()
    {
        $categories = ItemCategory::all();
        $locations = Location::all();

        return Inertia::render('Items/Edit', [
            'title' => 'Create',
            'categories' => $categories,
            'locations' => $locations,
        ]);
    }

    public function store(ItemPostRequest $request)
    {
        $validated = $request->validated();

        Item::updateOrCreate(
            ['id' => $validated['id'] ?? null],
            $validated
        );

        return redirect()->route('item.index')
            ->with('success', 'Item saved.');
    }

    public function edit($id)
    {
        $item = Item::findOrFail($id);
        $categories = ItemCategory::all();
        $locations = Location::all();

        return Inertia::render('Items/Edit', [
            'item' => $item,
            'title' => 'Edit',
            'categories' => $categories,
            'locations' => $locations,
        ]);
    }

    public function destroy(Item $item)
    {
        $item->delete();
        return redirect()->route('item.index')
            ->with('success', 'Item deleted.');
    }
}