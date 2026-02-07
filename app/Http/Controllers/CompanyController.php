<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Companies;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class CompanyController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index(){
        
        $companies = Companies::latest()->paginate(10);
        
        return Inertia::render('Companies/Create', [
            'companies' => $companies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Companies/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'CompanyName' => 'required|string|max:255',
            'Email' => 'required|string|email|max:255|unique:companies,Email',
            'Address' => 'nullable|string|max:255',
            'Phone' => 'nullable|string|max:12',
            'Fax' => 'nullable|string|max:50',
            'Website' => 'nullable|string|max:255',
            'Logo' => 'nullable|string|max:255',
        ]);

        Companies::create([
            'CompanyName' => $validated['CompanyName'],
            'Email' => $validated['Email'],
            'Address' => $validated['Address'] ?? null,
            'Phone' => $validated['Phone'] ?? null,
            'Fax' => $validated['Fax'] ?? null,
            'Website' => $validated['Website'] ?? null,
            'Logo' => $validated['Logo'] ?? null,
        ]);

        return redirect()->route('company.index')
            ->with('success', 'Company created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Companies $company)
    {
        return Inertia::render('Companies/Show', [
            'company' => $company
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Companies $company)
    {
        return Inertia::render('Companies/Edit', [
            'company' => $company
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Companies $company)
    {
        $validated = $request->validate([
            'CompanyName' => 'required|string|max:255',
            'Email' => 'required|string|email|max:255|unique:companies,Email,' . $company->CompanyID . ',CompanyID',
            'Address' => 'nullable|string|max:255',
            'Phone' => 'nullable|string|max:50',
            'Fax' => 'nullable|string|max:50',
            'Website' => 'nullable|string|max:255',
            'Logo' => 'nullable|string|max:255',
        ]);

        $company->CompanyName = $validated['CompanyName'];
        $company->Address = $validated['Address'] ?? null;
        $company->Phone = $validated['Phone'] ?? null;
        $company->Fax = $validated['Fax'] ?? null;
        $company->Website = $validated['Website'] ?? null;
        $company->Logo = $validated['Logo'] ?? null;
        $company->Email = $validated['Email'];

        $company->save();

        return redirect()->route('company.index')
            ->with('success', 'Company updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Companies $company)
    {
        $company->delete();

        return redirect()->route('company.index')
            ->with('success', 'Company deleted successfully.');
    }
}
