import React, { useState, useEffect } from "react";
import "../App.css";

const Navbar = ({ light, setLight }) => {
  const [active, setActive] = useState("");
  const [isPassedFirstPoint, setIsPassedFirstPoint] = useState(false);

  function handleLight() {
    setLight((prevLight) => {
      console.log(light);
      return prevLight === false ? true : false;
    });
  }

  const handleSetActive = (item) => {
    setActive(item);
  };
  useEffect(() => {
    const handleScroll = () => {
      const firstPointOffset = 300; // Adjust this value according to your requirement
      const isPassed = window.pageYOffset > firstPointOffset;
      setIsPassedFirstPoint(isPassed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark sticky-top ${
        isPassedFirstPoint ? "passed-first-point" : ""
      }`}
    >
      <div className="container">
        <div className="navbar-brand glowing-text">Mircea Rosca</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${active === "about" ? "active" : ""}`}
                href="#about"
                onClick={() => handleSetActive("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "skills" ? "active" : ""}`}
                href="#skills"
                onClick={() => handleSetActive("skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={() => handleSetActive("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "contact" ? "active" : ""}`}
                href="#contact"
                onClick={() => handleSetActive("contact")}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button onClick={handleLight} className="btn glowing-text">
                <span
                  role="img"
                  aria-label="Lightbulb"
                  style={{ fontSize: "1rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
