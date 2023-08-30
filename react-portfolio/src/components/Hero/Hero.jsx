import React from "react"

import {getImageUrl} from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Kaywan
            </h1>
            <p className={styles.description}>
                I'm a Electrical Engineer, ADD MORE TEXT
            </p>

            <a href="mailto:kaywan.sanjari@gmail.com" className={styles.contactEmail}>Contact Me</a>
        </div>
        <img  alt="hero image of me" className={styles.heroImg}/>

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}