<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objednavka extends Model
{
    protected $table = 'objednavky';

    protected $fillable = ['firstname', 'lastname', 'email', 'vaha', 'krajina'];
}
