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
                            <img src={getImageUrl("history/CSA.png")} alt="csa-logo"/>
                            <h4>Canadian Space Agency / Agence Spatiale Canadienne</h4>
                        </div>
                        <p>May 2023 - August 2023</p>
                        <ul>
                            <li>Implemented a multi-look complex image data compression algorithm for Synthetic Aperture Radar in Python, utilizing bit-plane encoding and object-oriented programming.</li>
                            <li>Developed a comprehensive dataset using Python data science tools (Pandas, Matplotlib, Seaborn) to analyze the performance of the algorithm on compact polarimetric images under various parameters.</li>
                            <li>Technologies used : Python, Anaconda, Git, Azure DevOps, Matplotlib, NumPy, Numba, Seaborn, GDAL. </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.CSA}>
                    <h3>Electrical Engineer Intern</h3>
                    <div className={styles.CSAimg}>
                        <div className={styles.test}>
                            <img src={getImageUrl("history/energere.png")} alt="csa-logo"/>
                            <h4>Energere</h4>
                        </div>
                        <p>May 2022 - August 2022</p>
                        <ul>
                            <li>Conducted the design and analysis of road LED lightning conversion projects in AGI32.</li>
                            <li>Analyzed data related to luminaires from cities and municipalities in Quebec on ArcGIS.</li>
                            <li>Prepared multiple feasibility studies for luminaire selection using ClickUp.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.CSA}>
                    <h3>Electrical Engineer Intern</h3>
                    <div className={styles.CSAimg}>
                        <div className={styles.test}>
                            <img src={getImageUrl("history/quebec.png")} alt="csa-logo"/>
                            <h4>La Régie de l'énergie</h4>
                        </div>
                        <p>August 2021 - December 2021</p>
                        <ul>
                            <li>Analyzed reliability standards applicable to the electricity transmission network in Québec.</li>
                            <li>Drafted reference documents and analyses in Microsoft Office, for transmission to entities subject to the reliability regime.</li>
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    )
}