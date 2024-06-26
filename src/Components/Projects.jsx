import React from "react";
import "../App.css";
import Capture1 from "../Assets/Capture1.PNG";
import Capture2 from "../Assets/Capture2.PNG";
import Capture3 from "../Assets/Capture3.PNG";
import Capture4 from "../Assets/Capture4.PNG";
import Capture5 from "../Assets/Capture5.PNG";
import Capture6 from "../Assets/Capture6.PNG";
import tvBackground from "../Assets/tvBackground.png";
import toRight from "../Assets/toRight.png";

const projects = [
  {
    title: "Platformer Java Game",
    imageUrl: Capture1,
    description: "Jump around and kill some crabs... for now!",
    itDescription: "Salta e uccidi qualche granchio... per ora!",
    githubUrl: "https://github.com/Arkadiar/Java-Platformer",
  },
  {
    title: "Bill-Split",
    imageUrl: Capture2,
    description:
      "Not sure if you're owed money after a crazy night out? No problem!",
    itDescription:
      "Non sei sicuro se ti devono dei soldi dopo un'uscita con gli amici? Non ci sono problemi!",
    githubUrl: "https://github.com/Arkadiar/Bill-Split-React",
  },
  {
    title: "Movie Generator",
    imageUrl: Capture3,
    description:
      "Bored of the same old movies? Generate something new based on your watched list.",
    itDescription:
      "Stanco di vedere sempre gli stessi film? Genera qualcosa di nuovo basato sui film già visti",
    githubUrl: "https://github.com/Arkadiar/Movie-Generator",
  },
  {
    title: "HTML and CSS are NOT obsolote!",
    imageUrl: Capture4,
    description: "A simple demonstration as to why that is.",
    itDescription: "Una semplice dimostrazione del perchè.",
    githubUrl: "https://github.com/Arkadiar/Bankist",
  },
  {
    title: "Demon Platformer",
    imageUrl: Capture6,
    description: "Jump around and kill some mages... ... for now!",
    itDescription: "Salta e uccidi qualche mago... ... per ora!",
    githubUrl: "https://github.com/Arkadiar/Platformer",
  },
  {
    title: "Expense Tracker",
    imageUrl: Capture5,
    description: "In today's economy, budgeting is your best friend.",
    itDescription:
      "Con l'economia di oggi... il budgeting é il tuo miglior amico.",
    githubUrl: "https://github.com/Arkadiar/Expense-Tracker",
  },
];

const Projects = ({ translate }) => {
  return (
    <div className="container pt-3">
      <h2 className="text-center glowing-text pb-5">Projects</h2>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8 mb-5">
          <div
            id="projectCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ maxWidth: "80%", margin: "0 auto" }} // Ensure the carousel is half the width and centered
          >
            <div className="carousel-inner">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="card project-card">
                    <div className="img-container">
                      <img
                        src={project.imageUrl}
                        className="card-img-top"
                        alt={project.title}
                      />
                      <div className="overlay">
                        <div className="text">
                          <h5>{project.title}</h5>
                          {translate ? (
                            <p>{project.description}</p>
                          ) : (
                            <p>{project.itDescription}</p>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="github-icon"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 2.25c-5.24 0-9.5 4.26-9.5 9.5 0 4.197 2.72 7.753 6.5 8.996.476.088.652-.207.652-.465 0-.229-.009-.835-.012-1.639-2.649.485-3.347-1.259-3.347-1.259-.432-1.098-1.054-1.391-1.054-1.391-.863-.591.065-.579.065-.579.953.067 1.454.979 1.454.979.848 1.452 2.225 1.033 2.769.79.086-.615.333-1.033.606-1.271-2.116-.24-4.345-1.057-4.345-4.709 0-1.04.37-1.89.978-2.555-.098-.241-.424-1.21.093-2.523 0 0 .8-.257 2.621.979a9.074 9.074 0 0 1 4.772 0c1.819-1.235 2.617-.979 2.617-.979.52 1.312.193 2.281.094 2.523.611.665.976 1.515.976 2.555 0 3.661-2.231 4.466-4.354 4.703.34.294.644.878.644 1.769 0 1.277-.011 2.309-.011 2.622 0 .261.174.555.658.461 3.778-1.243 6.496-4.799 6.496-8.996 0-5.24-4.26-9.5-9.5-9.5z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev carousel-btn"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden ">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
