import Navbar from "../../components/Navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/router';
import React, {useState} from 'react'
import axios from 'axios';

export default function login() {
    const router = useRouter();
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let login_token = null;

    //Ked sa vykoná stlačenie tlačidla
    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = new FormData();
        data.append('username', username);
        data.append('password', password);

        //Odošle dáta na daný link
        let result = await axios({
            method: 'post',
            url: 'http://localhost:8000/api/login',
            data: data,
        });

        //Získa odpoved
        let response = result.data;

        if (response['success']) {
            console.log("Login Successful");
            router.push({
                pathname: '/User',
            });
        } else if (response['successadmin']) {
            console.log("Login Successful");
            router.push('/Admin');
        } else {
            console.log("Failed to Login");
            alert("Failed to Login");
        }
    }

    return (
        <>
            <Navbar/>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div>
                    <form onSubmit={(e) => handleSubmit(e)} action="" method="post">
                        <div>
                            <label htmlFor="">Username</label><br/>
                            <input onInput={(e) => setUsername(e.target.value)} type="text" id="username"
                                   value={username}/>
                        </div>
                        <div>
                            <label htmlFor="">Password</label><br/>
                            <input onInput={(e) => setPassword(e.target.value)} type="password" id="password"
                                   value={password}/>
                        </div>
                        <div>
                            <input class="btn btn-outline-secondary" type="submit" value="Login"/>
                            <a className="btn btn-outline-secondary" data-toggle="collapse" href="/Register"
                               role="button">
                                Zaregistruj sa</a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

