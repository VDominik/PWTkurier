<?php

namespace App\Http\Controllers;

use App\Models\Objednavka;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
//use http\Env\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;




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

        $firstname = $request->input('firstname');
        $lastname = $request->input('lastname');
        $email = $request->input('email');
        $vaha = $request->input('vaha');


        $objednavka = new Objednavka();
        $objednavka->firstname = $firstname;
        $objednavka->lastname = $lastname;
        $objednavka->email = $email;
        $objednavka->vaha = $vaha;
        $objednavka->save();


    }

    public function updateAction($id, Request $request){
        $objednavka = Objednavka::where("id", "=", $id)->first();
        $objednavka->update([
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
            'vaha' => $request->input('vaha')
        ]);

        return redirect()->action('');

    }

    public function deleteAction($id){
        $objednavka = Objednavka::find($id);
        $objednavka->delete();

        return ['msg' => "najs"];

    }

}
