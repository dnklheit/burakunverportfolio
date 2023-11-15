import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import NavBarLinks from './NavBarLinks/NavBarLinks';


const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About'},
    { id: 'skills', label: 'Skills'},
    { id: 'education', label: 'Background'},
    { id: 'portfolio', label: 'Portfolio'},
    { id: 'contact', label: 'Contact'},

];

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showLinks, setShowLinks] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    }

    }, [windowWidth]);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
    }, []);

    useEffect(() => {
        const options = {
            root:  null,
            rootMargin: '0px',
            threshold: 0.4,
        };

        const handleIntersect = entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect, options);

        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            observer.observe(section);
        })

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        }


    }, []);

    const handleSectionClick = (event)  => {
        event.preventDefault();
        const sectionId = event.target.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            });
        }
    };

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };



  return ( 
  <header className={styles.header}>
   <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : '' }`}>
    <div className='container'>
     <div className={styles["navbar-wrapper"]}>
     <div>
        <a href='index.html' className={styles.logo}>
            <img src='./images/logo.png' alt='Burak Ünver'/>
            <div className={styles['logo-inner']}>
            <span className={styles.top}>
            </span>
            </div>
            </a>
     </div>
     <div className={`${styles['navbar-links']} ${
        showLinks ? styles.show : ''
     }`}
     >
     <ul>
       {navLinks.map(link => (
        <NavBarLinks 
            key={link.id}
            href={`#${link.id}`}
            label={link.label}
            onClick={handleSectionClick}
            active={activeSection === link.id}

        />
       ))}
     </ul>
     </div>
     {windowWidth <= 899 && (
     <div className={`${styles['toggle-button']} ${
        showLinks ? styles.open : ''
     }`}
     onClick={toggleLinks}
     >
       <span className={styles.line}></span>
       <span className={styles.line}></span>
       <span className={styles.line}></span>
     </div>
     )}
    </div>   
   </div>
 </nav>
</header>
 );
};

export default Navbar;