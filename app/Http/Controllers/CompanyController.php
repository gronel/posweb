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
        $company = Companies::first();
        return Inertia::render('Companies/Create',[
            'company' => $company
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'companyname' => 'required|string|max:50',
            'email' => 'required|string|email|max:50',
            'address' => 'nullable|string|max:150',
            'phone' => 'nullable|string|max:50',
            'fax' => 'nullable|string|max:50',
            'website' => 'nullable|string|max:50',
            'logo' => 'nullable|string',
        ]);

        Companies::updateOrCreate(
            ['id' => $request->id ?? null],
            [
                'companyname' => $validated['companyname'],
                'address' => $validated['address'] ?? null,
                'phone' => $validated['phone'] ?? null,
                'email' => $validated['email'],
                'fax' => $validated['fax'] ?? null,
                'website' => $validated['website'] ?? null,
                'logo' => $validated['logo'] ?? null,
            ]
        );

        return redirect()->back()
            ->with('success', 'Company created or updated successfully.');
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
            'companyname' => 'required|string|max:50',
            'email' => 'required|string|email|max:50|unique:companies,email,' . $company->id . ',id',
            'address' => 'nullable|string|max:150',
            'phone' => 'nullable|string|max:50',
            'fax' => 'nullable|string|max:50',
            'website' => 'nullable|string|max:50',
            'logo' => 'nullable|string',
        ]);

        $company->update($validated);

        return redirect()->back()
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
