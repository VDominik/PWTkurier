<?php

    ?>

<form method="post" action="{{action('UserController@insertAction') }}">

    Meno:<br>
    <input type="text" name="firstname" value="Dominik">
    <br>
    Priezvisko:<br>
    <input type="text" name="lastname" value="Vaclav">
    Email:<br>
    <input type="text" name="email" value="@">
    <br><br>
    <input type="submit" value="Odoslat">
</form>
