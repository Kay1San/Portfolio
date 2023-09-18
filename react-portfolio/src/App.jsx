
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import {Skills} from './components/Skills/Skills'
import { Jobs } from './components/Jobs/Jobs'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <>
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About />
    <Skills/>
    <Jobs />
    <Projects />
    <Contact />
    </div>
    </>
  )
}

export default App
