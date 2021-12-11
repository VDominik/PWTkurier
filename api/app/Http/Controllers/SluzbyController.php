<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Sluzby;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;





class SluzbyController extends Controller{

    public function login(Request $request )
    {
        $firstname = $request->input('firstname');
        $lastname = $request->input('lastname');
        $email = $request->input('email');
        $password = $request->input('password');


        $user = new User();
        $user->firstname = $firstname;
        $user->lastname = $lastname;
        $user->email = $email;
        $user->password = $password;
        $user->save();

        return ['msg' => "najs"];
    }



    public function showAllAction(){
        $sluzby = Sluzby::all();

        return response()->json([
            'sluzby'=>$sluzby
        ]);
    }

    public function showAction($id){
        $user = User::find($id);
        if (!isset($user)){
            return response()->json([], 404);
        }
        return response()->json([
            'user'=>$user
        ]);
    }

    public function insertAction(Request $request){

        $firstname = $request->input('firstname');
        $lastname = $request->input('lastname');
        $email = $request->input('email');
        $password = $request->input('password');


        $user = new User();
        $user->firstname = $firstname;
        $user->lastname = $lastname;
        $user->email = $email;
        $user->password = $password;
        $user->save();

        return response()->view('adduser');

    }

    public function updateAction($id, Request $request){
        $sluzby = Sluzby::where("id", "=", $id)->first();
        $sluzby->update([
            'vaha' => $request->input('vaha'),
            'SluzbaDo' => $request->input('SluzbaDo'),
            'SluzbaOd' => $request->input('SluzbaOd'),
        ]);

        return ['msg' => 'JO'];

    }

    public function deleteAction($id){
        $user = User::find($id);
        $user->delete();

    }



    public function getAddUserForm(){
        return view("adduser");
    }
}
