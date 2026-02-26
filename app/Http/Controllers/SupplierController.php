<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Supplier;

class SupplierController extends Controller
{
   
   public function index()
    {
        $suppliers = Supplier::latest()->paginate(10);
        
        return Inertia::render('Suppliers/Index', [
            'suppliers' => $suppliers
        ]);
    }


    public function create()
    {
        return Inertia::render('Suppliers/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'suppliername' => 'required|string|max:200|unique:supplier',
            'email' => 'required|string|email|max:50|unique:supplier',
            'address' => 'nullable|string|max:200',
            'telno' => 'nullable|integer|min:5',
            'cellno' => 'nullable|integer|min:12',
            'accreditation' => 'nullable|string|max:50',
            'suppliertype' => 'required|integer',
            'comcategory' => 'required|integer',
            'payterms' => 'required|integer',
            'contactname' => 'required|string|max:50',
            'designation' => 'nullable|string|max:50',
            'department' => 'nullable|string|max:50',
            'remarks' => 'nullable|string|max:500',
        ]);

        Supplier::create($validated);

        return redirect()->route('supplier.index')
            ->with('success', 'Supplier created.');
    }

    public function show(Supplier $supplier)
    {
        return Inertia::render('Suppliers/Show', ['supplier' => $supplier]);
    }

    public function edit(Supplier $supplier)
    {
        return Inertia::render('Suppliers/Edit', ['supplier' => $supplier]);
    }

    public function update(Request $request, Supplier $supplier)
    {
        $validated = $request->validate([
            'suppliername' => 'nullable|string|max:200|unique:supplier,suppliername,' . $supplier->id,
            'email' => 'nullable|string|email|max:50|unique:supplier,email,' . $supplier->id,
            'address' => 'nullable|string|max:200',
            'telno' => 'nullable|integer|max:15|min:5',
            'cellno' => 'nullable|integer|max:12',
            'accreditation' => 'nullable|string|max:50',
            'suppliertype' => 'nullable|integer',
            'comcategory' => 'nullable|integer',
            'payterms' => 'nullable|integer',
            'contactname' => 'nullable|string|max:50',
            'designation' => 'nullable|string|max:50',
            'department' => 'nullable|string|max:50',
            'remarks' => 'nullable|string|max:500',
        ]);

        $supplier->update($validated);

        return redirect()->route('supplier.index')
            ->with('success', 'Supplier updated.');
    }

    public function destroy(Supplier $supplier)
    {
        $supplier->delete();
        return redirect()->route('supplier.index')
            ->with('success', 'Supplier deleted.');
    }
}
