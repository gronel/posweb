<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Companies extends Model
{
    protected $table = 'companies';
    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $incrementing = true;

    protected $fillable = [
        'companyname',
        'email',
        'address',
        'phone',
        'fax',
        'website',
        'logo',
    ];
}