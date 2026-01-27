<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRights extends Model
{
    use HasFactory;

    protected $table = 'user_rights';

    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'id');
    }
}
