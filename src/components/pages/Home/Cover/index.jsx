import * as Style from './styles';
import { useWindowSize } from '../../../shared/WindowDimensions';
import { Container } from '../../../shared/styles';
import Carousel from '../../../shared/Carousel/Carousel';

const Cover = () => {
  const carouselPhotos = [
    {url: "https://drive.google.com/uc?export=view&id=1gO7zFriKwcNtY1TJlkPuqmmCTgnpkJ6k"},
    {url: "https://drive.google.com/uc?export=view&id=1gTpYyTeR7ajzkLbjwsMrqqsjL_0jTgIC"},
    {url: "https://drive.google.com/uc?export=view&id=1c1_oYhp1GKy7ZLdELobwP8lH2YLptDrU"},
    {url: "https://drive.google.com/uc?export=view&id=1EqShCzhGsU6oXfyKqrIkHHcrtkD7DY0F"},
    {url: "https://drive.google.com/uc?export=view&id=1bnD7v-lOkp09jNvMRq3dOStXgCAfg4_x"},
    {url: "https://drive.google.com/uc?export=view&id=1acrhwC8tkAKPfbQRO0FV0UzXspEg67rZ"},
    {url: "https://drive.google.com/uc?export=view&id=1w3-4W6J63IGxvZhgvBb-0-fZr0JSVPtt"}
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