import React from "react";
import styles from "../../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen, faHeart, faSignOutAlt,} from "@fortawesome/free-solid-svg-icons";

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
                            icon={faHeart}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <a href="/User">Objednavky</a>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faBookOpen}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <a href="/Objednavky/Vytvorenie_objednavky">Vytvorit Objednavku</a>
                    </li>
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
    )
}

export default LeftNavbar;
