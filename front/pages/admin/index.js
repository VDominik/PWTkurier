import React from 'react';
import styles from '../../styles/Admin.module.css'
import Navbar from "../../components/navbar";
import Link from 'next/link'


const Index = () => {
    return (

        <div className={styles.body}>
            <Navbar />

                <div className={styles.buttons}>
                    <Link href={"/create_order"}>
                        <a className={styles.button_big}>Vytvorenie objednávky</a>
                    </Link>

                    <Link href={"/view_order"}>
                        <a className={styles.button_big}>Prehliadavať objednávky</a>
                    </Link>

                    <Link href={"/edit_order"}>
                        <a className={styles.button_big}>Editovanie objednávky</a>
                    </Link>
                </div>

        </div>
    );
};

export default Index;