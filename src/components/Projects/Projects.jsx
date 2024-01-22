import React, {useState} from "react"
import {getImageUrl} from "../../utils"
import projects from "../../data/projects.json"
import styles from "./Projects.module.css"
import { ProjectCard } from "./ProjetCard"



export const Projects = () => {



    return (
       <section className={styles.container} id="projects">
        <h2>Projects</h2>
        <div className={styles.projectsContainer}>
                {projects.map((project, id) => {
                    return (
                        <div key={id} className={styles.test}>
                            <ProjectCard project = {project} key={id}/>
                            

                        </div>
                    )
                })}
            
        </div>
       </section>
    )
}