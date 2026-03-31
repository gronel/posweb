<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    protected $table = 'supplier';
    protected $fillable = [
        'suppliername',
        'address',
        'telno',
        'cellno',
        'accreditation',
        'suppliertype',
        'comcategory',
        'payterms',
        'contactname',
        'designation',
        'department',
        'email',
        'remarks',
    ];
}
   