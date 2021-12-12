<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Sluzby;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SluzbyController extends Controller{


    public function showAllAction(){
        $sluzby = Sluzby::all();

        return response()->json([
            'sluzby'=>$sluzby
        ]);
    }

    public function updateAction($id, Request $request){
        $info = [
            'success' => false,
            'token' => null,
            'succesadmin' => null,
        ];

        if (!($request->vaha == null)) {
            $sluzby = Sluzby::where("id", "=", $id)->first();
            $sluzby->update([
                'vaha' => $request->input('vaha'),
                'SluzbaDo' => $request->input('SluzbaDo'),
                'SluzbaOd' => $request->input('SluzbaOd'),
            ]);


            return [
                'success' => true,
            ];
        }else{
            return [
                'success' => false,
            ];
        }
    }
}
