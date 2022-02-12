import { StyledCaresoul, CaresoulImage, CaresoulButton } from "./styles";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { useWindowSize } from "../WindowDimensions";

const Carousel = ({ photos }) => {
  const [current, setCurrent] = useState(0);
  const length = photos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  } 

  const window = useWindowSize()

  return(
    <CaresoulImage url={photos[current].url} windowHeight={window.height}>
      <CaresoulButton direction='left' onClick={prevSlide}>
        <ChevronLeft />
      </CaresoulButton>
      <CaresoulButton direction='right' onClick={nextSlide}>
        <ChevronRight />
      </CaresoulButton>
    </CaresoulImage>
  )
}

export default Carousel