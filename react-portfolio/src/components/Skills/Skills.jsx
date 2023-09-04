import React from "react"
import {getImageUrl} from "../../utils"
import styles from "./Skills.module.css"
import BackEnd from "../../data/BackEnd.json"
import FrontEnd from "../../data/FrontEnd.json"
import Design from "../../data/Design.json"
import others from "../../data/others.json"

export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2>Skills</h2>
            <div className={styles.Boxes}>
                <div className={styles.FrontEndBox}>
                    <h3>Frontend</h3>
                    <div className={styles.containerFront}>
                        {FrontEnd.map((frontEnd, id) => {
                            return (
                                <div key={id} className={styles.skillsFront}>

                                    <div className={styles.skillElement}>
                                        <img src={getImageUrl(frontEnd.logo)} alt = "skill-logo" />
                                        <p>{frontEnd.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.BackEndBox}>
                    <h3>Backend</h3>
                    <div className={styles.containerBack}>
                        {BackEnd.map((backEnd, id) => {
                            return (
                                <div key={id} className={styles.skillsBack}>

                                    <div className={styles.skillElement}>
                                        <img src={getImageUrl(backEnd.logo)} alt = "skill-logo" />
                                        <p>{backEnd.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.DesignBox}>
                    <h3>Design Tools</h3>
                    <div className={styles.containerDesign}>
                        {Design.map((design, id) => {
                            return (
                                <div key={id} className={styles.skillsDesign}>

                                    <div className={styles.skillElement}>
                                        <img src={getImageUrl(design.logo)} alt = "skill-logo" />
                                        <p>{design.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className={styles.OthersBox}>
                    <h3>Others</h3>
                    <div className={styles.containerOthers}>
                        {others.map((other, id) => {
                            return (
                                <div key={id} className={styles.skillsOthers}>

                                    <div className={styles.skillElement}>
                                        <img src={getImageUrl(other.logo)} alt = "skill-logo" />
                                        <p>{other.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>




            </div>
        </section>
    )
}