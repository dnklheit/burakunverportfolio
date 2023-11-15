import React from "react";
import "./Education.css";
import Liconz from "./Liconz";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ type, time, place, field, school }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="list2">
    <Liconz reference={ref}/>
      <div>
        <h3 className="position2">
          <span>{type}&nbsp;</span>
          <br/>
            {field}
        </h3>
        <span className="ta2">
          {school} <span><b>|</b></span> {time} 
        </span>
        <p className="work2">{place}</p>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="experience2" id="education">
      <h2 className="title2">Education</h2>
      <div ref={ref} className="details2">
        <motion.div style={{ scaleY: scrollYProgress }}>
          <div className="left2" />
        </motion.div>
        <ul>
          <Details
            type="Bachelor's Degree"
            field="Materials Science and Engineering"
            school='Anadolu University'
            time="2014 - 2021"
            place="Eskisehir, Turkey"
          />
          <Details
            type="Erasmus Student"
            field="Materials Science and Engineering"
            school='AGH University of Science and Technology'
            time="2019 - 2020"
            place="Krakow, Poland"    
          />
          <Details
            type="Master's Degree"
            field="Materials Science and Engineering"
            school='Eskisehir Technical University'
            time="09.2022 - in progress"
            place="Eskisehir, Turkey"     
          />
          <Details
            type="Specialization Program"
            field="Data Science, Data Analytics and Machine Learning"
            school='Istanbul Technical University'
            time="12.2022 - 06.2023"
            place="Istanbul, Turkey"      
          />
          <Details
            type="Course"
            field="Full-Stack Web Development"
            school='IBM Developer'
            time="2023 - in progress"
          />
       

        </ul>
      </div>
    </div>
  );
};

export default Education;
