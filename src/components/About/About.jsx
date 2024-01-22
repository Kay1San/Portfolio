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
                        Bachelor's degree from Polytechnique Montréal in Electrical Engineering.
                    </p>

                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/laptop-icon.png")} alt = "laptop icon"  className={styles.laptop}/>
                <div className={styles.aboutItemText}>
                    <h3>
                        Software Developper
                    </h3>
                    <p>
                        Experience in multiple languages, most notably C/C++ and Python.
                    </p>
                    
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/suitcase.png")} alt = "suitcase icon"  className={styles.suitcase}/>
                <div className={styles.aboutItemText}>
                    <h3>
                        Work Experience
                    </h3>
                    <p>
                    Previous internship experience at the Canadian Space Agency.
                    </p>
                    
                </div>
            </li>
            
        </ul>
        </div>
    </section>
}