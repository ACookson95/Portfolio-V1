import { Header } from "../../../shared/styles";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Container } from '../../../shared/styles'
import * as Style from './styles'

const About = () => {
  return(
    <>
      <Container id="about">
        <Header>About Me</Header>
        <Style.TextWrapper>
          <h1>I am a Project Manager and full stack Web Developer.</h1>
          <h3>I enjoy challenging myself with tasks that test my ability to think critically and solve problems.
            I find emmence satisfaction with finding issues and then creating innovative solutions to those problems.</h3>
          <h1>Let me create something for you!</h1>
          <Link to='/contact'><Button variant="dark" size="lg">Contact Me</Button></Link>
        </Style.TextWrapper>
      </Container>
    </>
  )
};

export default About;