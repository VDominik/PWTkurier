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
            'firstname' => "Miso",
            'lastname' => "Hric",
            'email' => "slovak@ukf.sk",
            'vaha' => "2.5",
            'krajina' => "SK",
        ]);

        DB::table('objednavky')->insert([
            'firstname' => "Vlado",
            'lastname' => "Petrow",
            'email' => "europan@ukf.sk",
            'vaha' => "4",
            'krajina' => "EU",
        ]);
        DB::table('objednavky')->insert([
            'firstname' => "Mike",
            'lastname' => "Donald",
            'email' => "american@ukf.sk",
            'vaha' => "10",
            'krajina' => "SVET",
        ]);
    }
}
