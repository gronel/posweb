<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PrinterPostRequest extends FormRequest
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
            'id' => 'nullable|integer|exists:printer,id',
            'printerName' => 'required|string|max:50',
            'printerType' => 'required|string|max:50',
            'printerOrder' => 'nullable|integer|min:2',
            'printerPrintServer' => 'nullable|string|max:50',
            'printerPrintPort' => 'nullable|string|max:100',
            'printerAccessType' => 'nullable|string|max:100',
            'printerUsername' => 'nullable|string|max:100',
            'printerPassword' => 'nullable|string|max:100',
            'printerShellExec' => 'nullable|string|max:100',
            'printerActive' => 'nullable|string|max:100',
            'printerUnit' => 'nullable|string|max:100',
            'printerLabels' => 'nullable|string|max:100',
            'printerDensity' => 'nullable|string|max:100',
            'printerDpi' => 'nullable|string|max:100',
        ];
    }
}
