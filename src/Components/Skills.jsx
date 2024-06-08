import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import perc80 from "../Assets/perc80.png";
import perc90 from "../Assets/perc90.png";
import perc30 from "../Assets/perc30.png";
import perc60 from "../Assets/perc60.png";
import React from "react";

function Skills({ translate }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="skills-container">
      <div className="row">
        <div className="col-12">
          <div className="skill-bx wow zoomIn">
            <h2 className="glowing-text">Skills</h2>
            {translate ? (
              <p>
                While being eager to learn as much as possible, I am currently
                focusing on the <b>Web Development</b> side of programming.
                <br></br>
              </p>
            ) : (
              <p>
                Mi piace esplorare tutto il mondo del software development, ma
                al momento mi sto concentrando soprattutto sul{" "}
                <b>Web Development</b>.<br></br>
              </p>
            )}
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
            >
              <div className="item">
                <img src={perc80} alt="80% knowledge" />
                <h5>Web Development</h5>
                {translate ? (
                  <p>
                    Proficiency in JavaScript with a good understanding of React
                  </p>
                ) : (
                  <p>
                    Padronanza di JavaScript con una buona comprensione di React
                  </p>
                )}
              </div>
              <div className="item">
                <img src={perc60} alt="60% knowledge" />
                <h5>Web Design</h5>
                {translate ? (
                  <p>
                    I have a sufficient understanding of CSS and its relative
                    frameworks (bootstrap, tailwind)
                  </p>
                ) : (
                  <p>
                    Ho una conoscenza sufficiente di CSS e dei relativi
                    framework (Bootstrap, Tailwind)
                  </p>
                )}
              </div>
              <div className="item">
                <img src={perc30} alt="30% knowledge" />
                <h5>Backend</h5>
                {translate ? (
                  <p>
                    In order to create the best UX, I have a basic knowledge of
                    Node and PostgreSQL
                  </p>
                ) : (
                  <p>
                    Per creare la migliore esperienza per l'utente, ho una
                    conoscenza di base di Node e PostgreSQL
                  </p>
                )}
              </div>
              <div className="item">
                <img src={perc90} alt="90% knowledge" />
                <h5>Soft Skills</h5>
                {translate ? (
                  <p>Background in sales 😅</p>
                ) : (
                  <p>Esperienza pregressa nel settore delle vendite 😅</p>
                )}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
