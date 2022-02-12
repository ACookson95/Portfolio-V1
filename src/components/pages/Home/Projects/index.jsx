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
      imgsrc: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Stack: React on Rails. A web app used for organizing and running Hackathon events for Devpoint Labs.'
    },
    {
      title: 'BOM Audit Tool',
      link: 'https://script.google.com/macros/s/AKfycbwjMFDZSWpO2-1Q7P60Su3YyH3msxvbl2wQcCQis7SJff3eFuYErfwOpmoCWyFQ3wyDSg/exec',
      imgsrc: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      description: 'Stack: Google Apps Script Web App. A tool used to audit planset equipment to ensure the correct equipmement is available.'
    },
    {
      title: 'D&E Design Tools',
      link: 'https://script.google.com/macros/s/AKfycbwttRmc6zANGKDuPM0quCLsaRyXIAiAjYWPI16fABeb-hHflG9vN1NerqiTXbOXKxdo/exec',
      imgsrc: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Stack: React on Google Apps Script. Currently in progress. Combining all of the individual Design and Enginnering tools into a single loaction.'
    }
  ]
  return(
    <>
      <Header id='projects'>Projects Section</Header>
      <Container>
        <Row sm={1} lg={3}>
          {projects.map((project, index) => {
            return (
              <Col key={index}>
                <Card className="mb-3">
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
          <Button className="mb-3">Check out more of my work on my GitHub!</Button>

        </a>
      </Container>
    </>
  )
};

export default Projects;