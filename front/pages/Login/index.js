import React from 'react';
import styles from '../../styles/Login.module.css';
import Navbar from "../../components/Navbar/navbar";
import Link from 'next/link';

const login = () => {
    return (
        <>
            <Navbar/>
            <img className={styles.bg} src="/img/Login/bg1.png"/>
            <div className={styles.container}>
                <div className={styles.input}>
                    <form action="/Admin">
                        <h1 className={styles.h1}>Prihlásenie</h1>
                        <label className={styles.label} htmlFor="email"> <b>Email</b> </label>
                        <input/>
                        <br/>
                        <label className={styles.label} htmlFor="psw"> <b>Heslo</b> </label>
                        <input/>
                        <br/>
                        <a className="btn btn-outline-light m-3" data-toggle="collapse" href="/Login"
                           role="button" aria-expanded="false" aria-controls="collapseExample">Prihlásiť sa</a>
                        <br/>
                        <Link href={"/Register"}><a className={styles.a}>Zaregistruj sa</a>
                        </Link>
                    </form>
                </div>

            </div>

        </>
    )
}

export default login;