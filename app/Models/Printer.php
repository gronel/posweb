<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Printer extends Model
{
    protected $table = 'printer';

    protected $fillable = [
        'printerName',
        'printerOrder',
        'printerPrintServer',
        'printerPrintPort',
        'printerAccessType',
        'printerUsername',
        'printerPassword',
        'printerShellExec',
        'printerActive',
        'printerUnit',
        'printerLabels',
        'printerDensity',
        'printerDpi'
    ];
}
