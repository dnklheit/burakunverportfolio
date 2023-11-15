import React, { useState, useRef } from 'react';
import styles from './Skills.module.css';
import SkillBar from './SkillBar/SkillBar';
import Reveal from '../Reveal/Reveal';

 const skillsData = [
    {
        label: 'React',
        percentage: 90,
        style: `${styles['progress-line']} ${styles.js}`,
    },

    {
        label: 'Angular',
        percentage: 80,
        style: `${styles['progress-line']} ${styles.react}`,
    },

    {
        label: 'Tailwind',
        percentage: 85,
        style: `${styles['progress-line']} ${styles.next}`,
    },

    {
        label: 'JavaScript',
        percentage: 75,
        style: `${styles['progress-line']} ${styles.ts}`,
    },

    {
        label: 'HTML',
        percentage: 90,
        style: `${styles['progress-line']} ${styles.css}`,
    },

    {
        label: 'CSS',
        percentage: 90,
        style: `${styles['progress-line']} ${styles.css}`,
    },
    {
        label: 'Python',
        percentage: 90,
        style: `${styles['progress-line']} ${styles.css}`,
    },
    {
        label: 'Natural Language Processing',
        percentage: 90,
        style: `${styles['progress-line']} ${styles.js}`,
    },
    {
        label: 'Text Mining',
        percentage: 90,
        style: `${styles['progress-line']} ${styles.css}`,
    },
    {
        label: 'TfIdf Vectorizer',
        percentage: 80,
        style: `${styles['progress-line']} ${styles.next}`,
    },
    {
        label: 'Latent Dirichlet Allocation (LDA)',
        percentage: 90,
        style: `${styles['progress-line']} ${styles.next}`,
    },
 ];

const Skills = () => {
   
  return (
    <section id='skills' className={styles.skills}>
    <Reveal>
    <div className='container'>
        <div className={styles.title}>
           <h2 >Skills </h2>
        </div>
            <div className={styles['skill-bars']}>
                {skillsData.map(skill => (
                    <SkillBar
                    key={skill.label} 
                    label={skill.label}
                    percentage={skill.percentage}
                    style={skill.style}
                    />
                ))}
            </div>
        </div>
    <div className={styles.bottom}>
        <div className={`${styles.flex} container`}>
            <div>
                <h3>I'm available for work 
               </h3>
            </div>
            <div>
                <a href='#contact'>Contact me</a>
            </div>
        </div>
    </div>
    </Reveal>
    </section>
  );
};

export default Skills