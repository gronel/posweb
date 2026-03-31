<?php

namespace App\Http\Controllers;

use App\Http\Requests\PrinterPostRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Printer;

class PrinterController extends Controller
{
    public function index(Request $request)
    {
        $query = Printer::query();

        // apply filters if present
        if ($request->filled('printerName')) {
            $query->where('printerName', 'like', '%' . $request->printerName . '%');
        }
        if ($request->filled('printerOrder')) {
            $query->where('printerOrder', 'like', '%' . $request->printerOrder . '%');
        }
        if ($request->filled('printerPrintServer')) {
            $query->where('printerPrintServer', 'like', '%' . $request->printerPrintServer . '%');
        }
        if ($request->filled('printerPrintPort')) {
            $query->where('printerPrintPort', 'like', '%' . $request->printerPrintPort . '%');
        }
        if ($request->filled('printerAccessType')) {
            $query->where('printerAccessType', 'like', '%' . $request->printerAccessType . '%');
        }
        if ($request->filled('printerActive')) {
            $query->where('printerActive', $request->printerActive);
        }

        $printers = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('Printers/Index', [
            'printers' => $printers,
            'filters' => $request->only([
                'printerName',
                'printerOrder',
                'printerPrintServer',
                'printerPrintPort',
                'printerAccessType',
                'printerActive',
            ]),
        ]);
    }

    public function create()
    {
        return Inertia::render('Printers/Edit', ['title' => 'Create']);
    }

    public function store(PrinterPostRequest $request)
    {
        $validated = $request->validated();

        Printer::updateOrCreate(
            ['id' => $validated['id'] ?? null],
            [
                'printerName' => $validated['printerName'],
                'printerAccessType' => $validated['printerAccessType'],
                'printerOrder' => $validated['printerOrder'] ?? null,
                'printerPrintServer' => $validated['printerPrintServer'] ?? null,
                'printerPrintPort' => $validated['printerPrintPort'] ?? null,
                'printerUsername' => $validated['printerUsername'] ?? null,
                'printerPassword' => $validated['printerPassword'] ?? null,
                'printerShellExec' => $validated['printerShellExec'] ?? null,
                'printerActive' => $validated['printerActive'] ?? null,
                'printerUnit' => $validated['printerUnit'] ?? null,
                'printerLabels' => $validated['printerLabels'] ?? null,
                'printerDensity' => $validated['printerDensity'] ?? null,
                'printerDpi' => $validated['printerDpi'] ?? null,
            ]
        );

        return redirect()->route('printer.index')
            ->with('success', 'Printer saved.');
    }

    public function show(Printer $printer)
    {
        return Inertia::render('Printers/Edit', [
            'printer' => $printer,
            'title' => 'Create',
        ]);
    }

    public function edit($id)
    {
        $printer = Printer::findOrFail($id);
        return Inertia::render('Printers/Edit', [
            'printer' => $printer,
            'title' => 'Edit',
        ]);
    }

    public function destroy(Printer $printer)
    {
        $printer->delete();
        return redirect()->route('printer.index')
            ->with('success', 'Printer deleted.');
    }

    public function getPrinters()
    {
        $printers = Printer::latest()->paginate(10);
        return response()->json($printers);
    }
}
