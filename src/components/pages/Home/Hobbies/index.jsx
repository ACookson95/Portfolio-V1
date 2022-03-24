import { Container, Header, StyledCard } from "../../../shared/styles";
import Carousel from '../../../shared/Carousel/Carousel';
import { ListGroup, Card, Row, Col, Stack } from 'react-bootstrap';
import * as Style from './styles';

const Hobbies = () => {
  const photos = [
    {title: "Skiing", url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978083/Portfolio%20Assets/Hobbies/IMG_0360_txknvq.jpg"},
    {title: "Boating", url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978085/Portfolio%20Assets/Hobbies/IMG_1622_tgnvkk.jpg"},
    {title: "Hiking", url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978085/Portfolio%20Assets/Hobbies/IMG_8878_ygewzn.jpg"},
    {title: "Swimming", url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978084/Portfolio%20Assets/Hobbies/IMG_1138_y8yfzo.jpg"}
  ]
  return(
    <>
      <Header id="hobbies">Hobbies</Header>
      <Container>
        <StyledCard>
          <Card.Body>
            <Card.Title>
              My hobbies include skiing, playing basketball, video games, and a variety of outdoor activities.
            </Card.Title>
          </Card.Body>
          <Carousel photos={photos}/>
        </StyledCard>
      </Container>
    </>
  )
};

export default Hobbies;