import React from "react"

import {getImageUrl} from '../../utils'
import styles from "./Hero.module.css"
import pdf  from "./Kaywan_Sanjari_CV_EN.pdf"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Kaywan
            </h1>
            <p className={styles.description}>
                I'm an electrical engineer with a passion for software development, currently pursuing graduate studies in data engineering.
                Through my internship at the Canadian Space Agency and my projects, 
                I have refined my software skills, primarily focusing on C/C++ and Python.
            </p>
            <div className={styles.heroBtns}>
                <a href="mailto:kaywan.sanjari@gmail.com" className={styles.contactEmail}>Contact Me</a>
                <a href={pdf} className={styles.contactEmail} target="_blank">Resume</a>
            </div>
        </div>
        <img  src={getImageUrl("hero/me-image.png")}alt="image of me" className={styles.heroImg}/>

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}