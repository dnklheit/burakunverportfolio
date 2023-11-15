import React from "react";
import "./Experience.css";
import Licons from "./Licons";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="list">
    <Licons reference={ref}/>
      <div>
        <h3 className="position">
          {position}&nbsp;
          <a href={companyLink}>
            <span>@</span>
           {company}
          </a>
        </h3>
        <p className="work">{work}</p>
        <span className="ta">
          {time} | {address}
        </span>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="experience" id="experience">
      <h2 className="title">Experience</h2>
      <div ref={ref} className="details">
        <motion.div style={{ scaleY: scrollYProgress }}>
          <div className="left" />
        </motion.div>

        <ul>
          <Details
            position='Research & Development Intern'
            company="Ford Company"
            time="07.2018 - 08.2018"
            address="Inonu, Turkey"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position='Research & Development Intern'
            company="Candy Hoover"
            time="06.2020 - 07.2020"
            address="Eskisehir, Turkey"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position='Project & System Engineer'
            company="Bilektech Feed Machinery"
            time="2021-2022"
            address="Eskisehir, Turkey"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
