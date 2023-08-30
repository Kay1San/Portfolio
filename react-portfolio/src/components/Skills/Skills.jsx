import React from "react"
import {getImageUrl} from "../../utils"
import styles from "./Skills.module.css"
import softwares from "../../data/skills.json"

export const Skills = () => {
    return (
        <section className={styles.container}>
            <h2>Skills</h2>
            <div className={styles.programs}>
                {softwares.map((skill, id) => {
                    return <div key = {id} className={styles.test}>
                                
                                    <div className={styles.imgLogo}><img src={getImageUrl(skill.imageSrc)} alt={skill.title}/> </div>
                                    <p>{skill.title}</p>
                                
                            </div>

                    
                })}
            </div>
        </section>
    )
}