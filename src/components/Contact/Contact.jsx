import React from 'react';
import styles from './Contact.module.css';
import Reveal from '../Reveal/Reveal';
import ContactForm from './ContactForm/ContactForm';
import { TbPhoneCall } from 'react-icons/tb';
import { HiOutlineMail } from 'react-icons/hi';


const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
        <Reveal>
            <div className='container'>
                <div className={styles.title}>
                    <h2>
                        Get In Touch
                    </h2>
                </div>
                <div className={`grid ${styles['contact-form']}`}>
                <div className={styles.content}>
                    <h3>Let's Connect</h3>
                    <p>
                        Please fill out the form on this section to contact with me or e-mail me:
                    </p>
                    <div className={styles['contact-wrapper']}><TbPhoneCall size={50}/>
                    <span>Call me</span>
                    <h3>537 797 46 87</h3>
                    </div>
                    <div className={styles['contact-wrapper']}><HiOutlineMail size={50}/>
                    <span>Email</span>
                    <a href='burakunv3r@gmail.com'>
                    burakunv3r@gmail.com
                    </a>
                    </div>
                </div>
                <div className={styles.heading}>
                <h3>Contact Me</h3>
                <ContactForm/>
                </div>
                </div>
            </div>
        </Reveal>
    </section>
  );
};

export default Contact;