import * as Style from './styles';
import Carousel from '../../../shared/Carousel/Carousel';

const Cover = () => {
  const carouselPhotos = [
    {url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978056/Portfolio%20Assets/Cover/P1048209_rqbpn2.jpg"},
    {url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978052/Portfolio%20Assets/Cover/_DSC6786_svzdg2.jpg"},
    {url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978052/Portfolio%20Assets/Cover/IMG_2283_eaabtl.jpg"},
    {url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978051/Portfolio%20Assets/Cover/_DSC6593_gmgiil.jpg"},
    {url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978054/Portfolio%20Assets/Cover/IMG_8947_macsk4.jpg"},
    {url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978052/Portfolio%20Assets/Cover/IMG_2896_emmjd0.jpg"},
    {url: "https://res.cloudinary.com/cookson-personal-portfolio/image/upload/v1647978055/Portfolio%20Assets/Cover/_C9A0686_cqyvu7.jpg"}
  ]
  return(
    <>
      <Style.CarouselWrapper id='home'>
        <Carousel photos={carouselPhotos}/>
      </Style.CarouselWrapper>
    </>
  )
};

export default Cover;