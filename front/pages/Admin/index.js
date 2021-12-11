import React from 'react';
import styles from '../../styles/Admin.module.css';
import LeftNavbar from "../../components/Admin/LeftNavbar";
import Header from "../../components/Admin/Header";
import Content from "../../components/Admin/Content"


const Admin = () => {
    return (
        <div className={styles.container}>
            <LeftNavbar />
            <Header />
            <div className="position-absolute top-50 start-50 translate-middle">
         <a href="/Admin/Uprava_pravidiel">
             <button type="button" className="btn btn-dark" >Nastavenie paramterov</button>
         </a>
        </div>
        </div>

    );
};

export default Admin;
