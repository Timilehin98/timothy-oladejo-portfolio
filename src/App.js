
// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <About />
       <Skills />
       <Portfolio />
       <Contact />

       
      {/* Add more sections here */}
    </>
  );
}

export default App;

