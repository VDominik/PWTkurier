import React from "react";
import styles from "../../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
    faCog,
    faHeart,
    faRocket,
    faSignOutAlt,
    faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

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
                            icon={faTachometerAlt}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <a href="#">Nástenka</a>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faRocket}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <a href="#">Preskúmať</a>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faBookOpen}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <a href="#">Knižnica</a>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <a href="#">Obľúbené</a>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faCog}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <a href="#"> Nastavenia</a>
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
    );
}

export default LeftNavbar;
