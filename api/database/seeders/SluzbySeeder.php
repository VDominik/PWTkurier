<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SluzbySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sluzby')->insert([
            'vaha' => "4",
            'SluzbaDo' => "DHL",
            'SluzbaOd' => "DPD",
        ]);
        DB::table('sluzby')->insert([
            'vaha' => "4",
            'SluzbaDo' => "DHL",
            'SluzbaOd' => "DPD",
        ]);
        DB::table('sluzby')->insert([
            'vaha' => "4",
            'SluzbaDo' => "UPS",
            'SluzbaOd' => "FEDEX",
        ]);
    }
}
