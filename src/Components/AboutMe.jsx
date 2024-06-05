//Salve! Sono Mircea, uno sviluppatore emergente di Orvieto, Italia, desideroso di padroneggiare lo sviluppo di siti web, web app e giochi. Essendo un neofita, sono ansioso di assorbire conoscenze e affrontare nuove sfide. Competente in HTML, CSS, e in viaggio per padroneggiare JavaScript. Impariamo e cresciamo insieme!

import { useState, useEffect } from "react";

export default function AboutMe() {
  const [index, setIndex] = useState(0);
  const [remove, setRemove] = useState(false);
  const skills = ["React", "Nextjs", "Tailwind", "Java", "PostgreSQL"];
  const [currentText, setCurrentText] = useState("");
  const [current, setCurrent] = useState(200);
  const delay = 1500;

  useEffect(() => {
    let looping = setInterval(() => {
      nextIter();
    }, current);

    return () => {
      clearInterval(looping);
    };
  }, [currentText]);

  function nextIter() {
    let i = index % skills.length;
    let fullText = skills[i];
    let updateText = remove
      ? fullText.substring(0, currentText.length - 1)
      : fullText.substring(0, currentText.length + 1);

    setCurrentText(updateText);

    if (remove) {
      setCurrent((prevDelay) => prevDelay / 2);
    }

    if (!remove && updateText === fullText) {
      setRemove(true);
      setCurrent(delay);
    } else if (remove && updateText === "") {
      setRemove(false);
      setIndex(index + 1);
      setCurrent(300);
    }
  }

  const [text, setText] = useState(false);

  const handleText = () => {
    setText((prevText) => {
      return prevText === false ? true : false;
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 offset-lg-6 col-md-8 offset-md-4 col-sm-10 offset-sm-1"></div>

        <div className="description-container p-3 rounded">
          <button className="btn" onClick={handleText}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              style={{ width: "30px", height: "30px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
          </button>
          <div className="description">
            <h1 className="glowing-text mb-4">
              {text
                ? "Welcome to my Portfolio / CV"
                : "Benvenuti nel mio Portfolio / CV"}
            </h1>

            <p className="mb-4">
              {text
                ? `Hi! I'm Mircea, an emerging developer from Orvieto, Italy, keen on
              mastering website, web app, and game development. As a junior, I'm
              eager to soak up knowledge and tackle new challenges. Proficient
              in HTML, CSS, Javascript and on the journey of mastering: `
                : `Ciao! Sono Mircea, uno sviluppatore emergente di Orvieto, Italia, desideroso di imparare a fondo lo sviluppo di siti web, web app e giochi. Essendo un neofita, sono ansioso di assorbire conoscenze e affrontare nuove sfide. Competente in HTML, CSS e Javascript; in viaggio per padroneggiare: 
              `}
              <span className="typed-text">{currentText}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
