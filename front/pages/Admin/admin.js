import React from 'react';
import styles from '../../styles/Admin.module.css';

import LeftNavbar from "../../components/Navbar/LeftNavbar";
import Header from "../../components/Navbar/Header";
import Content from "../../components/Navbar/Content"


const Admin = () => {
    return (


            <div className={styles.container}>
                <LeftNavbar />
                <Header />
                <Content />

            </div>

    );
};

export default Admin;
