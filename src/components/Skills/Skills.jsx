import React from "react"
import {getImageUrl} from "../../utils"
import styles from "./Skills.module.css"
import Dev from "../../data/DevTools.json"
import Languages from "../../data/ProgrammingLanguages.json"
import DataScience from "../../data/DataScience.json"
import IDE from "../../data/others.json"

export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2>Skills</h2>
            <div className={styles.Boxes}>
                <div className={styles.FrontEndBox}>
                    <h3>Programming Languages</h3>
                    <div className={styles.containerFront}>
                        {Languages.map((languages, id) => {
                            return (
                                <div key={id} className={styles.skillsFront}>

                                    <div className={styles.skillElement}>
                                        <img src={getImageUrl(languages.logo)} alt = "skill-logo" />
                                        <p>{languages.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.DesignBox}>
                    <h3>Data Science Tools</h3>
                    <div className={styles.containerDesign}>
                        {DataScience.map((design, id) => {
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

                <div className={styles.BackEndBox}>
                    <h3>Development Tools</h3>
                    <div className={styles.containerBack}>
                        {Dev.map((dev, id) => {
                            return (
                                <div key={id} className={styles.skillsBack}>

                                    <div className={styles.skillElement}>
                                        <img src={getImageUrl(dev.logo)} alt = "skill-logo" />
                                        <p>{dev.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.OthersBox}>
                    <h3>Operating Systems and IDEs</h3>
                    <div className={styles.containerOthers}>
                        {IDE.map((ide, id) => {
                            return (
                                <div key={id} className={styles.skillsOthers}>

                                    <div className={styles.skillElement}>
                                        <img src={getImageUrl(ide.logo)} alt = "skill-logo" />
                                        <p>{ide.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />

            </div>
        </section>
    )
}