import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Navbar from "./Components/NavBar";
import ContactForm from "./Components/Contact-Form";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

function App() {
  const [translate, setTranslate] = useState(true);
  const [light, setLight] = useState(false);
  return (
    <div className="App">
      <Navbar light={light} setLight={setLight} />
      <header id="about">
        <Header translate={translate} setTranslate={setTranslate} />
      </header>
      <main>
        <section className="skills" id="skills">
          <Skills translate={translate}></Skills>
        </section>
        <section className="projects" id="projects">
          <Projects translate={translate}></Projects>
        </section>
        <Experience translate={translate} />

        <section id="contact">
          <ContactForm translate={translate}></ContactForm>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
