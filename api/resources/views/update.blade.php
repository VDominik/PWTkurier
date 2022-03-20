<?php

    ?>

<form method="post" action="{{ action('UserController@updateAction', ['id' => $user->id]) }}">
    Meno:<br>
    <input type="text" name="firstname" value="{{ $user->firstname }}">
    <br>
    Priezvisko:<br>
    <input type="text" name="lastname" value="{{ $user->lastname }}">
    Email:<br>
    <input type="text" name="email" value="{{ $user->email }}">
    <br><br>
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <input type="submit" value="Upravit">
</form>
