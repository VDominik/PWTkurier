<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory;

    protected $table = 'users';
    protected $primaryKey = 'id';

    protected $fillable = ['firstname', 'lastname', 'email', 'password'];


    protected $guarded = [ 'password' ];
}
