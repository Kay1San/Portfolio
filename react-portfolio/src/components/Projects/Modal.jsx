import React from "react"
import {getImageUrl} from "../../utils"
import styles from "./Modal.module.css"

export default function Modal({open, children, onClose}) {
    if(!open) return null

    return (
        <>
            <div className={styles.Overlay}>
                <div className={styles.ModalTest}>
                    <button onClick={onClose}>X</button>
                        {children}
                </div>
            </div>
        </>
    )
}