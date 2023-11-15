import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';


function App() {
  return (
    <>
   <Navbar/>
   <main>
   <Home/>
   <About/>
   <Skills/>
   <Education/>
   <Experience/>
   <Portfolio/>
   <Contact/>
   </main>
   <Footer />
   </>
  );
};

export default App;
