import { Header } from "../../../shared/styles";
import { Container } from "../../../shared/styles";
import Carousel from '../../../shared/Carousel/Carousel';
import { ListGroup } from 'react-bootstrap';
import * as Style from './styles';

const Hobbies = () => {
  const photos = [
    {url: "https://drive.google.com/uc?export=view&id=1Wvoslvrp2PnDS_zTo3FoYffMzRAmHjto"},
    {url: "https://drive.google.com/uc?export=view&id=1tb-6d5-y2U9jq3eV37oXpPF43DC9ZDMz"},
    {url: "https://drive.google.com/uc?export=view&id=1hFA1KKMxw3ErcOVrgdpAW0v5caINBmwQ"},
    {url: "https://drive.google.com/uc?export=view&id=1oMtkPZ-Rh2G05KHY-L8nDoWwEnZ3YNKI"}
  ]
  return(
    <>
      <Container>
        <Header id="hobbies">Hobbies</Header>
          <Style.HobbyWrapper>
            <Style.Description>
              <p>
                I would consider myself a "jack of all trades, master of none." 
                Some might say that I have too many hobbies and they might be right. 
              </p>
              <p>
                But here's a few: 
              </p>
              <ListGroup>
                <ListGroup.Item variant='dark'>Basketball</ListGroup.Item>
                <ListGroup.Item variant='dark'>Skiing</ListGroup.Item>
                <ListGroup.Item variant='dark'>Skateboarding</ListGroup.Item>
                <ListGroup.Item variant='dark'>Video Games</ListGroup.Item>
                <ListGroup.Item variant='dark'>D&D</ListGroup.Item>
                <ListGroup.Item variant='dark'>Hiking & Camping</ListGroup.Item>
                <ListGroup.Item variant='dark'>Boating & Swimming</ListGroup.Item>
              </ListGroup>
            </Style.Description>
            <Style.CarouselWrapper>
              <Carousel photos={photos}/>
            </Style.CarouselWrapper>
          </Style.HobbyWrapper>
      </Container>
    </>
  )
};

export default Hobbies;