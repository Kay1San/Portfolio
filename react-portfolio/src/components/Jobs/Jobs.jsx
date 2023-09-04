import React from "react"
import {getImageUrl} from "../../utils"
import styles from "./Jobs.module.css"

export const Jobs = () => {
    return (
        <section className={styles.container} id="experience">
            <h2>Experience</h2>
            <div className={styles.jobContainer}>
                <div className={styles.CSA}>
                    <h3>Electrical Engineer Intern</h3>
                    <div className={styles.CSAimg}>
                        <div className={styles.test}>
                            <img src={getImageUrl("history/CSA-logo.png")} alt="csa-logo"/>
                            <h4>Agence Spatiale Canadienne / Canadian Space Agency</h4>
                        </div>
                        <p>May 2023 - August 2023</p>
                        <ul>
                            <li>Implemented a Python-based image data compression algorithm to support the Mars Ice Mapper mission</li>
                            <li>Simulated, in Matlab, a synthetic aperture radar compressionn using the Range Doppler algorithm</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.CSA}>
                    <h3>Electrical Engineer Intern</h3>
                    <div className={styles.CSAimg}>
                        <div className={styles.test}>
                            <img src={getImageUrl("history/energere-logo.png")} alt="csa-logo"/>
                            <h4>Energere</h4>
                        </div>
                        <p>May 2022 - August 2022</p>
                        <ul>
                            <li>Design of lighting conversion projects by lighting calculations on AGI32</li>
                            <li>Analysis of data collected on ArcGIS about luminaires concerning the cities and municipalities of Québec</li>
                            <li>Realisation of several feasibility studies on the choices of luminaires through ClickUp</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.CSA}>
                    <h3>Electrical Engineer Intern</h3>
                    <div className={styles.CSAimg}>
                        <div className={styles.test}>
                            <img src={getImageUrl("history/regie-logo.png")} alt="csa-logo"/>
                            <h4>La Régie de l'énergie</h4>
                        </div>
                        <p>August 2021 - December 2021</p>
                        <ul>
                            <li>Analysis of reliability standards applicable to the electricity transmission network in Québec</li>
                            <li>Drafting of reference documents and analyses in Microsoft Office, for transmission to entites subject to the reliability regime</li>
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    )
}