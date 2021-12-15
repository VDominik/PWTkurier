import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../../styles/Home.module.css";
import React from "react";

function LeftNavbar() {
    return (
        <div className={styles.navcontainer}>
            <div className={styles.logo}>
                <h2>PWTkurier</h2>
            </div>
            <div className={styles.wrapper}>
                <ul>
                <li>
                        <FontAwesomeIcon
                            icon={faSignOutAlt}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <a href="/">Odhlásiť sa</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftNavbar;
