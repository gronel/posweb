<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SupplierPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => 'nullable|integer|exists:supplier,id',
            'suppliername' => 'required|string|max:200',
            'email' => 'required|string|email|max:50',
            'address' => 'nullable|string|max:200',
            'telno' => 'nullable|integer|min:5',
            'cellno' => 'required|integer|min:12',
            'accreditation' => 'nullable|string|max:50',
            'suppliertype' => 'required|integer',
            'comcategory' => 'required|integer',
            'payterms' => 'required|integer',
            'contactname' => 'required|string|max:50',
            'designation' => 'nullable|string|max:50',
            'department' => 'nullable|string|max:50',
            'remarks' => 'nullable|string|max:500',
        ];
    }
}
