import styles from "../../styles/Home.module.css";
import React from "react";

function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Ahoj, <span>User</span>
					</h2>
					<p>Vitajte na nástenke</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
