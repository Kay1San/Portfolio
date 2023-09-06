import React, {useState} from "react"
import projects from "../../data/projects.json"
import { getImageUrl } from "../../utils"
import styles from "./ProjectCard.module.css"
import Modal from "./Modal.jsx"
import ReactCardFlip from "react-card-flip"

export const ProjectCard = ({
    project: {title, imageSrc, imageSrcR, location, date, description, skills, demo, source, logo}
}) => {
    
    const [isFlipped, setIsFlipped] = useState(false)

    function flipCard(){
        setIsFlipped(!isFlipped)
    }

    return  ( 
       <div className={styles.singleProject}>
            <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                    <div className={styles.frontCard} onClick={flipCard}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.date}>{date}</p>
                        <ul>
                            <div className={styles.allS}>
                                {skills.map((skill, id) => {
                                    return (
                                        <div key={id} className={styles.skills}>
                                            <li>{skill}</li>
                                        </div>
                                    )
                                })}
                            </div>
                        </ul>
                        <img className={styles.flipImg} src={getImageUrl(imageSrc)} alt='flip-logo'/>
                    </div>

                    <div className={styles.backCard} onClick={flipCard}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.location}>{location}</p>
                        <p className={styles.description}>{description}</p>
                        <img className={styles.flipImg} src={getImageUrl(imageSrcR)} alt='flip-logo'/>
                        {source && (
                            <div>
                              <button onClick={isFlipped} className={styles.buttonLink}>
                                <a href={source} target="_blank">
                                    <div className={styles.gitLink}>
                                        <img src={getImageUrl(logo)}/>
                                        <p>GitHub</p>
                                    </div>
                                </a>
                              </button>
                            </div>
                        )}
                    </div>
               

            </ReactCardFlip>
       </div>
    )
}