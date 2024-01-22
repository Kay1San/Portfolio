import React from "react"
import {getImageUrl} from "../../utils"
import styles from "./Contact.module.css"
import contactInfo from "../../data/contact.json"

export const Contact = () => {
   return (
    <footer id="contact" className={styles.container}>
        <div className={styles.title}>
            <h2>CONTACT</h2>
            <div className={styles.test}>
                <h3 className={styles.reach}>Feel free to reach out to me on any of these platforms. I'm always looking for new opportunities.</h3>
            </div>
        </div>
            <div className={styles.icons}>
                {contactInfo.map((info, id) => {
                    return (
                    <div key={id}className={styles.individualIcon}>
                        <a href={info.link} target="_blank">
                            <img src={getImageUrl(info.icon)} alt="element-icon"/>
                        </a>
                    </div>
                    )
                })}
            </div>
    </footer>
   )
}