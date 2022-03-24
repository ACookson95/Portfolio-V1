import styled from "styled-components";

export const CaresoulImage = styled.div`
  position: relative;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  max-height: ${props => props.windowHeight}px;
  width: 100%;
  padding-top: 75%;
  -webkit-transition: background-image 0.5s ease-in-out;
  transition: background-image 0.5s ease-in-out;
  `;

export const CaresoulButton = styled.div`
  position: absolute;
  top: 0;
  ${props => props.direction}: 0px;
  padding: 10px;
  cursor: pointer;
  color: #F4F4F4;
  width: 60px;
  height: 100%;    
  transition: all 0.25s ease-in-out;
  @media (hover: hover) {
    :hover {
      background: rgb(0,0,0);
      background: linear-gradient(${props => props.direction === 'left' ? '270deg' : '90deg'}, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15449929971988796) 100%);
      color: #7be9ad;
      & svg{
        transform: scale(1.25);
      }
    }
  }

  @media (hover: none) {
    & a:active {
      background: rgb(0,0,0);
      background: linear-gradient(${props => props.direction === 'left' ? '270deg' : '90deg'}, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15449929971988796) 100%);
      color: #7be9ad;
      & svg{
        transform: scale(1.25);
      }
      transition: 0.1s;
    }
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;