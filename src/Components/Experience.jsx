import React from "react";
import { useState } from "react";
import "../App.css";
import toLeft from "../Assets/toLeft.png";
import toRight from "../Assets/toRight.png";
const jobs = [
  {
    id: 1,
    year: "2022-2024",
    title: "Sales Representative",
    titleIt: "Rappresentate Vendite",
    company: "GECOGAS",
    description:
      "Provided consultation and managed over 300 clients.\n- Enhanced goal tracking through information systems (utilized Excel and Google Docs extensively, including simple automation).\n- Role primarily focused on teamwork and intra-company communication.\n- Adapted to the technical requirements of the company.\n- Designed web services using the Wordpress platform.",
    descriptionIt:
      "Fornito consulenza e gestito oltre 300 clienti.\n- Migliorato il tracciamento degli obiettivi attraverso sistemi informativi (utilizzato ampiamente Excel e Google Docs, compresa l'automazione semplice).\n- Ruolo principalmente concentrato sul lavoro di squadra e sulla comunicazione intra-aziendale.\n- Adattato alle esigenze tecniche dell'azienda.\n- Progettato servizi web utilizzando la piattaforma Wordpress.",
    image: toLeft,
  },
];
const Experience = ({ translate }) => {
  return (
    <div class="exp-container">
      <div class="exp-row">
        <div class="exp-col">
          <div class="title">
            <h2 className="glowing-text">EDUCATION</h2>
          </div>

          <div class="contents">
            <div class="box">
              <h4>2013 - 2017</h4>
              {translate ? (
                <h3>High School Degree</h3>
              ) : (
                <h3>Diploma di Scuola Superiore</h3>
              )}
              {translate ? (
                <p>
                  Diploma in Applied Sciences at Ettore Majorana High School in
                  Orvieto, with a particular focus on computer science and
                  innovation.
                </p>
              ) : (
                <p>
                  Diploma in Scienze applicate presso il liceo Ettore Majorana
                  di Orvieto, con una particolare attenzione verso l'informatica
                  e l'innovazione.
                </p>
              )}
            </div>

            <div class="box">
              <h4>2018 - 2021</h4>
              {translate ? (
                <h3>Bachelor's Degree</h3>
              ) : (
                <h3>Laurea Triennale</h3>
              )}
              {translate ? (
                <p>
                  Degree in Political Science and International Relations
                  specializing in investigations and security at the University
                  of Tuscia in Viterbo, with a thesis on cyber warfare and
                  global cybersecurity.
                </p>
              ) : (
                <p>
                  Laurea in Scienze Politiche e Relazioni Internazionali
                  nell'ambito delle investigazioni e della sicurezza
                  all'Università degli Studi della Tuscia a Viterbo con la tesi
                  sulla guerra cibernetica e la cybersecurity mondiale.
                </p>
              )}
            </div>

            <div class="box">
              <h4>2023 - 2024</h4>
              {translate ? (
                <h3>Postgraduate Education</h3>
              ) : (
                <h3>Studi Post-Laurea</h3>
              )}
              {translate ? (
                <p>
                  Acquired certifications through online platforms, particularly
                  Udemy, in HTML and CSS, JavaScript, React (using Next.js and
                  Redux), and PostgreSQL. The training was then consolidated
                  through projects, including a brief use of embedded systems.
                </p>
              ) : (
                <p>
                  Acquisito certificazioni tramite piattaforme online,
                  soprattutto Udemy, in HTML e CSS, JavaScript, React (utilizzo
                  di Next.js e Redux) e PostgreSQL. La formazione è poi stata
                  consolidata tramite progetti, tra cui anche un breve utilizzo
                  di sistemi embedded.
                </p>
              )}
            </div>
          </div>
        </div>

        <div class="exp-col">
          <div class="title">
            <h2 className="glowing-text">EXPERIENCE</h2>
          </div>

          <div class="contents">
            {jobs.map((job) => {
              if (translate) {
                return (
                  <div class="box">
                    <h4>{job.year}</h4>
                    <h3>{job.title}</h3>
                    <h5>{job.company}</h5>
                    <p>{job.description}</p>
                  </div>
                );
              }
              return (
                <div class="box">
                  <h4>{job.year}</h4>
                  <h3>{job.titleIt}</h3>
                  <h5>{job.company}</h5>
                  <p>{job.descriptionIt}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
