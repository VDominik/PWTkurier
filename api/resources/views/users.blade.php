<?php

    ?>
<table>
    @foreach($users as $user)
        <tr>
            <td>
                {{ $user->firstname }} {{ $user->lastname }}
            </td>
            <td>
                {{ $user->email }}
            </td>
            <td>
                <a href="{{action("UserController@showAction",['id' => $user->id]) }}">editovat</a>
            </td>
        </tr>
    @endforeach
</table>
