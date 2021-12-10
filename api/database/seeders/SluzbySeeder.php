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
            'SluzbaDo' => "DHLSK",
            'SluzbaOd' => "DPDSK",
        ]);
        DB::table('sluzby')->insert([
            'vaha' => "4",
            'SluzbaDo' => "DHLEU",
            'SluzbaOd' => "DPDEU",
        ]);
        DB::table('sluzby')->insert([
            'vaha' => "4",
            'SluzbaDo' => "UPSSVET",
            'SluzbaOd' => "FEDEXSVET",
        ]);
    }
}
