import { StyledCaresoul, CaresoulImage, CaresoulButton } from "./styles";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { useWindowSize } from "../WindowDimensions";

const Carousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImgSrc, setCurrentImgSrc] = useState(photos[currentIndex].url);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000);
    loadImg();
    return () => clearInterval(interval);
  }, [currentIndex])

  const loadImg = () => {
    const img = new Image();
    img.onload = () => {
      setCurrentImgSrc(img.src)
    }
    img.src = photos[currentIndex].url
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
    loadImg();
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
    loadImg()
  } 

  const window = useWindowSize()

  return(
    <CaresoulImage url={currentImgSrc} windowHeight={window.height}>
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