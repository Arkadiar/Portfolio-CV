import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import perc80 from "../Assets/perc80.png";
import perc90 from "../Assets/perc90.png";
import perc30 from "../Assets/perc30.png";
import perc60 from "../Assets/perc60.png";
import React from "react";

function Skills() {
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
            <p>
              While being eager to learn as much as possible, I am currently
              focusing on the <b>Web Development</b> side of programming{" "}
              <br></br>
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
            >
              <div className="item">
                <img src={perc80} alt="Image" />
                <h5>Web Development</h5>
                <p>
                  Proficiency in JavaScript with a good understanding of React
                </p>
              </div>
              <div className="item">
                <img src={perc60} alt="Image" />
                <h5>Web Design</h5>
                <p>
                  I have a sufficient understanding of CSS and its relative
                  frameworks (bootstrap, tailwind)
                </p>
              </div>
              <div className="item">
                <img src={perc30} alt="Image" />
                <h5>Backend</h5>
                <p>
                  In order to create the best UX, I have a basic knowledge of
                  Node and PostgreSQL
                </p>
              </div>
              <div className="item">
                <img src={perc90} alt="Image" />
                <h5>Soft Skills</h5>
                <p>Background in sales 😅</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
