<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sluzby extends Model
{
    protected $table = 'sluzby';

    protected $fillable = ['vaha', 'SluzbaDo', 'SluzbaOd'];
}
