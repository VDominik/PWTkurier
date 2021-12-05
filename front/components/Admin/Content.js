import React from "react";
import styles from "../../styles/Home.module.css";


function Content() {
	return (
		<div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<button>Vytvorenie objednávky</button>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<a href="/Prehladavanie_objednavok"><button> Prehliadať objednávky</button></a>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<button>Editovanie objednávky</button>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Content;
