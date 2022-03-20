<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'firstname' => "Test",
            'lastname' => "Testovy",
            'email' => "test@ukf.sk",
            'password' => "test",
        ]);

        DB::table('users')->insert([
            'firstname' => "user",
            'lastname' => "user",
            'email' => "user",
            'password' => "user",
        ]);

        DB::table('users')->insert([
            'firstname' => "admin",
            'lastname' => "admin",
            'email' => "admin",
            'password' => "admin",
        ]);
}
}
