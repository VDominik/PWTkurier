<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Objednavka;
use App\Models\Sluzby;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ObjednavkaController extends Controller
{

    public function showAllObjednavky (Request $request){
        $objednavky = Objednavka::all();

        return response()->json([
            'objednavky'=>$objednavky
        ]);
    }

    public function showObjednavka($id){
        $objednavka = Objednavka::find($id);
        if (!isset($objednavka)){
            return response()->json([], 404);
        }
        return response()->json([
            'objednavka'=>$objednavka
        ]);
    }

    public function insertAction(Request $request){
        $sluzbySK_id = 1;
        $sluzbaSK = Sluzby::find($sluzbySK_id);
        response()->json(['sluzba'=>$sluzbaSK]);

        $sluzbyEU_id = 2;
        $sluzbaEU = Sluzby::find($sluzbyEU_id);
        response()->json(['sluzba'=>$sluzbaEU]);

        $sluzbySVET_id = 3;
        $sluzbaSVET = Sluzby::find($sluzbySVET_id);
        response()->json(['sluzba'=>$sluzbaSVET]);

        $firstname = $request->input('firstname');
        $lastname = $request->input('lastname');
        $email = $request->input('email');
        $vaha = $request->input('vaha');
        $krajina = $request->input('krajina');

        $objednavka = new Objednavka();
        $objednavka->firstname = $firstname;
        $objednavka->lastname = $lastname;
        $objednavka->email = $email;
        $objednavka->vaha = $vaha;
        $objednavka->krajina = $krajina;
        $objednavka->save();

        if($vaha <= $sluzbaSK->vaha && $krajina == "SK") {
            return ['success' => true, 'msg' => $sluzbaSK->SluzbaDo];
        }elseif ($vaha > $sluzbaSK->vaha && $krajina == "SK"){
            return ['success' => true, 'msg' => $sluzbaSK->SluzbaOd];

        }elseif($vaha <= $sluzbaEU->vaha && $krajina == "EU") {
            return ['success' => true, 'msg' => $sluzbaEU->SluzbaDo];
        }elseif($vaha > $sluzbaEU->vaha && $krajina == "EU") {
            return ['success' => true, 'msg' => $sluzbaEU->SluzbaOd];

        }elseif($vaha <= $sluzbaSVET->vaha && $krajina == "SVET") {
            return ['success' => true, 'msg' => $sluzbaSVET->SluzbaDo];
        }elseif($vaha > $sluzbaSVET->vaha && $krajina == "SVET") {
            return ['success' => true, 'msg' => $sluzbaSVET->SluzbaOd];
        }
        else { return ['msg' => "error"];}
    }

    public function updateAction($id, Request $request){
        $sluzbySK_id = 1;
        $sluzbaSK = Sluzby::find($sluzbySK_id);
        response()->json(['sluzba'=>$sluzbaSK]);

        $sluzbyEU_id = 2;
        $sluzbaEU = Sluzby::find($sluzbyEU_id);
        response()->json(['sluzba'=>$sluzbaEU]);

        $sluzbySVET_id = 3;
        $sluzbaSVET = Sluzby::find($sluzbySVET_id);
        response()->json(['sluzba'=>$sluzbaSVET]);

        $objednavka = Objednavka::where("id", "=", $id)->first();
        $objednavka->update([
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
            'vaha' => $request->input('vaha'),
            'krajina' => $request->input('krajina'),
        ]);

        if($request->vaha <= $sluzbaSK->vaha && $request->krajina == "SK") {
            return ['success' => true, 'msg' => $sluzbaSK->SluzbaDo];
        }elseif ($request->vaha > $sluzbaSK->vaha && $request->krajina == "SK"){
            return ['success' => true, 'msg' => $sluzbaSK->SluzbaOd];

        }elseif($request->vaha <= $sluzbaEU->vaha && $request->krajina == "EU") {
            return ['success' => true, 'msg' => $sluzbaEU->SluzbaDo];
        }elseif($request->vaha > $sluzbaEU->vaha && $request->krajina == "EU") {
            return ['success' => true, 'msg' => $sluzbaEU->SluzbaOd];

        }elseif($request->vaha <= $sluzbaSVET->vaha && $request->krajina == "SVET") {
            return ['success' => true, 'msg' => $sluzbaSVET->SluzbaDo];
        }elseif($request->vaha > $sluzbaSVET->vaha && $request->krajina == "SVET") {
            return ['success' => true, 'msg' => $sluzbaSVET->SluzbaOd];
        }
        else { return ['msg' => "error"];}

    }

    public function deleteAction($id){
        $objednavka = Objednavka::find($id);
        $objednavka->delete();

        return ['msg' => "najs"];

    }

}
