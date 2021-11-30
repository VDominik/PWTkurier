<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Env\Request;
use Illuminate\Routing\Controller;


class UserController extends Controller{

    public function login(\Illuminate\Http\Request $request)
    {

        if($request->input('name')=='cicik' && $request->input('description')=='cicik') {


            return ['status' => 'success', 'msg' => "IDE TO"];
        }
        else{
            return ['status' => 'failed', 'msg' => "najn"];
        }

    }



    public function showAllAction(){
        $users = User::all();

        return response()->json([
            'users'=>$users
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


        $user = new User();
        $user->firstname = $firstname;
        $user->lastname = $lastname;
        $user->email = $email;
        $user->save();

        return response()->view('adduser');

    }

    public function updateAction($id, Request $request){
        $user = User::where("id", "=", $id)->first();
        $user->update([
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
        ]);

        return redirect()->action('UserController@showAllAction');

    }

    public function deleteAction($id){
        $user = User::find($id);
        $user->delete();

    }



    public function getAddUserForm(){
        return view("adduser");
    }
}
