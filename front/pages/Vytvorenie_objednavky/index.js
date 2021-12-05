import React from 'react';
import styles from '../../styles/Admin.module.css';
import LeftNavbar from "../../components/Admin/LeftNavbar";
import Header from "../../components/Admin/Header";
import Content from "../../components/Admin/Content"



const Vytvorenie_objednavky = () => {
    return (
        <div >

            <LeftNavbar />
            <Header />

            <img className={styles.bg} src="/img/Login/bg1.png"/>

            <div className={styles.cont}>
                <div className={styles.center}>

                    <form action="/Admin">
                        <h1 className={styles.title}>Vytvorenie objednávky</h1>
                        <label  className={styles.label} htmlFor="name" > <b className={styles.text}>Meno</b> </label>
                        <input placeholder={"Zadajte meno"} className={styles.input}/>
                        <br/>
                        <label className={styles.label}  htmlFor="subname"> <b className={styles.text}>Priezvisko</b> </label>
                        < input placeholder={"Zadajte priezvisko"} className={styles.input} />
                        <br/>
                        <label className={styles.label} htmlFor="adress"> <b className={styles.text}>Adresa</b> </label>
                        <input placeholder={"Zadajte adresu "} className={styles.input} />
                        <br/>
                        <label className={styles.label} htmlFor="weight"> <b className={styles.text}>Váha </b> </label>
                        <input placeholder={"Zadajte váhu zásielky v kg"} className={styles.input} />
                        <br/>
                        <button  className={styles.submit} type="submit">Odoslať</button>
                        <br/>

                    </form>
                </div>
            </div>
        </div>






    );
};

export default Vytvorenie_objednavky;
