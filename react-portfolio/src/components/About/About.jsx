import React from "react"
import {getImageUrl} from "../../utils"

import styles from "./About.module.css"

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
            </h2>

        <div className={styles.content}>
            <img className={styles.aboutImage}
            src={getImageUrl("about/laptop.png")} 
            alt="me sitting with a laptop"/>

        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/blueCap.png")} alt = "cursor icon" className = {styles.graduation}/>
                <div className={styles.aboutItemText}>
                    <h3>
                        Education
                    </h3>
                    <p>
                        Graduated from Polytechnique Montreal in Electrical Engineering.
                    </p>

                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/embedded.png")} alt = "server icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        Embedded Developper
                    </h3>
                    <p>
                        I have experience developing projects using embedded systems.
                    </p>
                    
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt = "cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        Frontend Developper
                    </h3>
                    <p>
                        I have a passion in building web applications.
                    </p>
                    
                </div>
            </li>
        </ul>
        </div>
    </section>
}