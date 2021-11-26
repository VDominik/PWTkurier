import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "../../public/img/Main_imgs_warehouse/c.jpg"

function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Ahoj, <span>Admin</span>
					</h2>
					<p>Vitajte na nástenke</p>
				</div>
				<div className={styles.profile}>
					<img src="/img/Main_imgs_warehouse/c.jpg" className={styles.image} />
				</div>
			</div>
		</div>
	);
}

export default Header;
