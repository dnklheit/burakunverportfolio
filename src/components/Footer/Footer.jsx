import React from 'react';
import styles from './Footer.module.css';
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.flex}>
            <div>
                    <p>&copy; 
                    2023 by Burak Ünver.
                    <br /> All rights reserved.
                    </p>
                    <img src='./images/logo.png' alt='logo'/>
                    </div>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='about'>About</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#background'>Background</a></li>
                        <li><a href='#Portfolio'>Portfolio</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                    <div className={styles.icons}>
                    <a href='https://github.com/dnklheit'>
                        <BsGithub size={30} />
                    </a>
                    <a href='https://instagram.com/dnklheit/'>
                        <BsInstagram size={30} />
                    </a>
                    <a href='https://www.linkedin.com/in/burak-ünver/'>
                        <BsLinkedin size={30} />
                    </a>       
                    <a href='/#'>
                        <BsFacebook size={30} />
                    </a>
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer;