import React, {useState} from "react"
import {getImageUrl} from "../../utils"
import projects from "../../data/projects.json"
import Modal from "./Modal.jsx"
import styles from "./Projects.module.css"


export const Projects = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
       <section className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.projectsContainer}>
            <div className={styles.singleProject}>
                <h3>Title</h3>
                <p>date</p>
                <p>location</p>
                <p>skills</p>
                <button onClick={() => setIsOpen(true)}>Learn More </button>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    Testing Modal Content
                </Modal>
                
            </div>
        </div>
       </section>
    )
}