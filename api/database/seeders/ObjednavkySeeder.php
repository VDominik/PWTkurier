<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ObjednavkySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('objednavky')->insert([
            'firstname' => "Test",
            'lastname' => "Testovy",
            'email' => "test@ukf.sk",
            'vaha' => "2.5",
            'krajina' => "SK",

        ]);
    }
}
