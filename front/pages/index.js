import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar/navbar';
import Autors_img from '../components/Autors_img/autors_img';
import Main_imgs from '../components/Main_imgs/main_imgs';
import Footer from '../components/Footer/footer';
import React from 'react';

export default function Home() {
    return (
        <>
        <div className={styles.container}>
            <Navbar/>
            <Main_imgs/>
            <Autors_img/>
            <Footer/>
        </div>
        </>
    );
}