import React from 'react';
import Navbar from "../../components/Navbar/navbar";
import Main_imgs from "../../components/Main_imgs/main_imgs";
import Link from 'next/link';

const login = () => {
    return (
        <>
            <Navbar/>
            <div>
                <h1>Prihlásenie</h1>
                <label htmlFor="email"><b>Email</b></label>
                <input/> <br/>
                <label htmlFor="psw"><b>Heslo</b></label>
                <input/> <br/>
                <button type={<textarea name="reg" id="1" cols="70" rows="40"></textarea>}>prihlasenie</button>
                <Link as="/Register" href={"/Register/register"}><a>Zaregistruj sa</a></Link>
            </div>
        </>
    )
}

export default login;