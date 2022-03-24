import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Container, Header, StyledCard } from '../../../shared/styles'
import * as Style from './styles'

const About = () => {
  return(
    <>
      <Header>About Me</Header>
      <Container id="about">
        <StyledCard className="m-4">
          <Card.Body>
            <Card.Title>
              I am a Project Manager and full stack Web Developer.
            </Card.Title>
            <Card.Text>
              I enjoy challenging myself with tasks that test my ability to think critically and solve problems.
              I find emmence satisfaction with finding issues and then creating innovative solutions to those problems.
            </Card.Text>
            <Card.Title>
              Let me create something for you!
            </Card.Title>
            <Link to='/portfolio/contact'>
              <Button variant="dark" size="lg">Contact Me</Button>
            </Link>
          </Card.Body>
        </StyledCard>
      </Container>
    </>
  )
};

export default About;