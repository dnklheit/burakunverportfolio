import React from "react";
import styles from "./Home.module.css";
import svg from "./skills6-cropped.svg";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className={styles.home}>
          <div className={styles["home-content"]}>
            <div className={styles["home-title"]}>
              <h2>Hey, I'm Burak</h2>
            </div>
            <div className={styles["text-wrapper"]}>
              <p>
                Frontend Developer
              </p>
            </div>
            <div className={styles.links}>
              <div className={styles.link}>
                <a href="#portfolio">View My Projects</a>
              </div>
              <span className={styles.divider}>or</span>
              <div className={styles.link}>
                <a href="#about">Read About Me</a>
              </div>
            </div>
            <div className={styles.scroll}>
              <a href="#about">
                <span> Download CV </span>
              </a>
            </div>
          </div>
          <div className={styles.circ}>
            <img src={svg} alt="svg" />
          <div className={styles.circle}>
            <div className={styles.content}>
              <img src='./images/burak4.jpg' alt="Burak" />
              <a href="#contact">hire Me!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
