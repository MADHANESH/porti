import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import {Skills} from "./components/Skills/Skills"
import { Education } from "./components/Education/Education";
 // No {} needed for default exports

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
