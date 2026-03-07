<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\PrinterController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/items', [ItemController::class, 'getItems'])->name('items.index');
Route::get('/printers', [PrinterController::class, 'getPrinters'])->name('printers.index');
