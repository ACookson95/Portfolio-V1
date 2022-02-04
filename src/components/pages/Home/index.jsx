import Cover from './Cover';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Footer from './Footer';

const Home = () => {
  return(
    <>
      <h1>Home Section</h1>
      <Cover />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Footer />
    </>
  )
};

export default Home;