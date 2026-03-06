<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemPostRequest extends FormRequest
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
            'id' => 'nullable|integer|exists:item,id',
            'itemcode' => 'required|string|max:150|unique:item,itemcode,' . $this->id,
            'itemname' => 'nullable|string|max:50',
            'itemdescription' => 'nullable|string|max:100',
            'locationid' => 'required|integer|exists:location,id',
            'itemcategoryid' => 'required|integer|exists:item_category,id',
            'brandtype' => 'nullable|string|max:100',
            'uom' => 'nullable|string|max:15',
            'stocklevelqty' => 'nullable|integer',
            'stackoh' => 'nullable|integer',
            'isactive' => 'nullable|integer',
            'itemimg' => 'nullable|string',
            'costprice' => 'nullable|decimal:18,5',
            'sellingprice' => 'nullable|decimal:18,5',
        ];
    }
}