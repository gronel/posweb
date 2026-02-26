<?php

namespace App\Http\Controllers;

use App\Http\Requests\SupplierPostRequest;
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
        return Inertia::render('Suppliers/Edit', ['title' => 'Create']);
    }

    public function store(SupplierPostRequest $request)
    {
        $validated = $request->validated();
            Supplier::updateOrCreate(   
            ['id' => $validated['id'] ?? null],
            [
                'suppliername' => $validated['suppliername'],
                'address' => $validated['address'] ?? null,
                'telno' => $validated['telno'] ?? null,
                'cellno' => $validated['cellno'],
                'accreditation' => $validated['accreditation'] ?? null,
                'suppliertype' => $validated['suppliertype'],
                'comcategory' => $validated['comcategory'],
                'payterms' => $validated['payterms'],
                'contactname' => $validated['contactname'],
                'designation' => $validated['designation'] ?? null,
                'department' => $validated['department'] ?? null,
                'email' => $validated['email'],
                'remarks' => $validated['remarks'] ?? null,
            ]
        );
       

        return redirect()->route('supplier.index')
            ->with('success', 'Supplier created.');
    }

    public function show(Supplier $supplier)
    {
        return Inertia::render('Suppliers/Edit', ['supplier' => $supplier, 'title' => 'Create']);
    }

    public function edit($id)
    {
        $supplier = Supplier::findOrFail($id);
        return Inertia::render('Suppliers/Edit', ['supplier' => $supplier, 'title' => 'Edit']);
    }

    

    public function destroy(Supplier $supplier)
    {
        $supplier->delete();
        return redirect()->route('supplier.index')
            ->with('success', 'Supplier deleted.');
    }
}
