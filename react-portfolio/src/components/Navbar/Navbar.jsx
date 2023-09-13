import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {

    return <nav className={styles.navbar}>
        <a href="/" className={styles.title}> KS</a> 
        <div className = {styles.menu}> 
            <ul className = {`${styles.menuItems}`}
            onClick={() => setMenuOpen(false)}> 
                <li> <a href="#about">About </a></li>
                <li> <a href="#skills"> Skills </a></li>
                <li> <a href="#experience">Experience </a></li>
                <li> <a href="#projects">Projects </a></li>
                <li> <a href="#contact">Contact </a></li>
            </ul>
        </div>
    </nav>
}