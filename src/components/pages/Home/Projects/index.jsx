import { Header } from "../../../shared/styles";
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Container } from "../../../shared/styles";
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      title: 'DPL Hackathon Creator',
      link: 'https://hackathon-creator.herokuapp.com/',
      imgsrc: 'https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978562/Portfolio%20Assets/Projects/hackathon_ujjk84.jpg',
      description: 'Stack: React on Rails. A web app used for organizing and running Hackathon events for Devpoint Labs.'
    },
    {
      title: 'BOM Audit Tool',
      link: 'https://script.google.com/macros/s/AKfycbwjMFDZSWpO2-1Q7P60Su3YyH3msxvbl2wQcCQis7SJff3eFuYErfwOpmoCWyFQ3wyDSg/exec',
      imgsrc: 'https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978559/Portfolio%20Assets/Projects/solar_jsfhgi.jpg',
      description: 'Stack: Google Apps Script Web App. A tool used to audit planset equipment to ensure the correct equipmement is available.'
    },
    {
      title: 'D&E Design Tools',
      link: 'https://script.google.com/macros/s/AKfycbwttRmc6zANGKDuPM0quCLsaRyXIAiAjYWPI16fABeb-hHflG9vN1NerqiTXbOXKxdo/exec',
      imgsrc: 'https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978560/Portfolio%20Assets/Projects/design_ri29lb.jpg',
      description: 'Stack: React on Google Apps Script. Currently in progress. Combining all of the individual Design and Enginnering tools into a single location.'
    }
  ]
  return(
    <>
      <Header id='projects'>Projects</Header>
      <Container>
        <Row xs={1} sm={1} md={1} lg={3}>
          {projects.map((project, index) => {
            return (
              <Col key={index}>
                <Card className="m-3">
                  <Card.Img variant="top" src={project.imgsrc} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                      {project.description}
                    </Card.Text>
                    <a 
                      href={project.link} 
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button variant="primary">Check it out!</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        <a
          href="https://www.github.com/ACookson95"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="mb-3">See more on my GitHub!</Button>

        </a>
      </Container>
    </>
  )
};

export default Projects;