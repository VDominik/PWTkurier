import React from 'react';
import {useState} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/Login.module.css';
import Navbar from "../../components/Navbar/navbar";

export default function register  ()  {

    const router = useRouter();

    //Zadefinovanie dát
    const [modifiedData, setModifiedData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const [] = useState(null);

    //Ukladá prijaté dáta
    const handleChange = ({target: {name, value}}) => {
        setModifiedData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    //Odošle dáta na daný link
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', modifiedData);
            console.log(response);
        } catch (error) {
        }


        console.log("Login Successful");
        router.push('/Login');
        alert("Zaregistrovany");
    }

    return (
        <>
            <Navbar/>
            <img className={styles.bg} src="/img/Login/bg1.png"/>
            <div className={styles.container}>
                <div className={styles.input}>
                    <form onSubmit={handleSubmit}>
                        <h1 className={styles.h1}>Registrácia</h1>
                        <label className={styles.label}> <b>Meno</b> </label>
                        <input name="firstname" name="firstname" onChange={handleChange}></input>
                        <br/>
                        <label className={styles.label}> <b>Priezvisko</b> </label>
                        <input name="lastname" name="lastname" onChange={handleChange}></input>
                        <br/>
                        <label className={styles.label}> <b>Email</b> </label>
                        <input type="text" name="email" onChange={handleChange}></input>
                        <br/>
                        <label className={styles.label}> <b>Heslo</b> </label>
                        <input type="password" name="password" onChange={handleChange}></input>
                        <br/>
                        <button type="submit">Registrovať sa</button>
                        <br/>
                    </form>
                </div>
            </div>
        </>
    )
}
