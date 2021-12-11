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
            <Content />
        </div>
    );
};

export default Admin;
