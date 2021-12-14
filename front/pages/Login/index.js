import Navbar from "../../components/Navbar/navbar";
import {useRouter} from 'next/router';
import React, {useState} from 'react'
import axios from 'axios';
import styles from "../../styles/Login.module.css";

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
            <div>
                <div className={styles.groundmain}>

                    <form className={styles.wrapperr} onSubmit={(e) => handleSubmit(e)} action="" method="post">

                        <div className={styles.title}>
                            <h1 >Prihlásenie</h1>
                        </div>

                            <div className={styles.form}>

                                <label className={styles.inputfield}>
                                    <img className={styles.iconuser} src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'/>
                                    <br/>
                                    <input className={styles.input} onInput={(e) => setUsername(e.target.value)} type="text" id="username"
                                       value={username}/>
                                </label>

                                <label className={styles.inputfield} htmlFor="">
                                    <img className={styles.iconpw} src='https://icons-for-free.com/iconfiles/png/512/lock+password+protect+safety+security+icon-1320086045132546966.png'/>
                                    <br/>
                                <input className={styles.input} onInput={(e) => setPassword(e.target.value)} type="password" id="password"
                                       value={password}/>
                                </label>

                                        <div className={styles.inputfield}>
                                            <input className={styles.btn} type="submit" value="Prihlásiť"/>

                                            <a className={styles.btn} data-toggle="collapse" href="/Register" role="button">
                                                Registrovať</a>
                                        </div>
                            </div>
                    </form>
            </div>
            </div>
        </>
    )
}

