import React, { useState } from 'react'
import styles from '../../styles/Login.module.css';
import Navbar from "../../components/Navbar/navbar";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';



export default function login (){

    const router = useRouter();

    let [ username, setUsername ] = useState('');
    let [ password, setPassword ] = useState('');

    let login_token = null;

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        let data = new FormData();
        data.append( 'username', username );
        data.append( 'password', password );

        let result = await axios( {
            method:'post',
            url: 'http://localhost:8000/api/login',
            data: data,
        } );

        let response = result.data;

        if( response['success'] ){
            console.log("Login Successful");
            router.push('/User');
        }else if( response['successadmin'] ) {
            console.log("Login Successful");
            router.push('/Admin');
        }else {
            console.log("Failed to Login");
            alert("Failed to Login");
        }

    }


    return (
        <>
            <div>
                <div >
                    <form onSubmit={ ( e ) => handleSubmit( e ) } action="" method="post">
                        <div>
                            <label htmlFor="">Username</label><br />
                            <input onInput={ ( e ) => setUsername( e.target.value ) } type="text" id="username" value={ username } />
                        </div>
                        <div>
                            <label htmlFor="">Password</label><br />
                            <input onInput={ ( e ) => setPassword( e.target.value ) } type="password" id="password" value={ password } />
                        </div>
                        <div>
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>





            {/*<Navbar/>*/}
            {/*<img className={styles.bg} src="/img/Login/bg1.png"/>*/}
            {/*<div className={styles.container}>*/}
            {/*    <div className={styles.input}>*/}
            {/*        <form action="/Admin">*/}
            {/*            <h1 className={styles.h1}>Prihlásenie</h1>*/}
            {/*            <label className={styles.label} htmlFor="email"> <b>Email</b> </label>*/}
            {/*            <input/>*/}
            {/*            <br/>*/}
            {/*            <label className={styles.label} htmlFor="psw"> <b>Heslo</b> </label>*/}
            {/*            <input/>*/}
            {/*            <br/>*/}
            {/*            <a className="btn btn-outline-light m-3" data-toggle="collapse" href="/Login"*/}
            {/*               role="button" aria-expanded="false" aria-controls="collapseExample">Prihlásiť sa</a>*/}
            {/*            <br/>*/}
            {/*            <Link href={"/Register"}><a className={styles.a}>Zaregistruj sa</a>*/}
            {/*            </Link>*/}
            {/*        </form>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </>
    )
}

