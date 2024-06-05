import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Navbar from "./Components/NavBar";
import ContactForm from "./Components/Contact-Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header id="about">
        <Header />
      </header>
      <main>
        <section className="skills" id="skills">
          <Skills></Skills>
        </section>
        <section className="projects" id="projects">
          <Projects></Projects>
        </section>

        <section id="contact">
          <ContactForm></ContactForm>
        </section>
      </main>
    </div>
  );
}

export default App;
