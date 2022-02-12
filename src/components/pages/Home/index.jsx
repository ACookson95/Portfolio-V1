import Cover from './Cover';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Hobbies from './Hobbies';
import { Container } from './styles';

const Home = () => {
  return(
    <Container>
      <Cover />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
    </Container>
  )
};

export default Home;