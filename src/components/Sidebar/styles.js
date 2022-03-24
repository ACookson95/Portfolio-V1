import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
  align-self: flex-start;
  top: 0;
  padding-top: calc(1em + env(safe-area-inset-bottom));
  padding-bottom: calc(1em + env(safe-area-inset-bottom));
  background-color: #000000;
`;

export const SidebarWrapper = styled.div`
  width: ${props => props.sidebarOpen ? '300px' : '60px' };
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
  flex-grow: ${props => props.flexGrow ? props.flexGrow: 0};

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F4F4F4;
    font-size: 25px;
    transition: all 0.25s ease-in-out;
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    flex-grow: 1;
  }

  @media (hover: hover) {
    & a:hover{
      transform: scale(1.25);
      color: #7be9ad;
    }
  }

  @media (hover: none) {
    & a:active{
      transform: scale(1.25);
      transition: 0.1s;
      color: #7be9ad;
    }
  }

  & p {
    white-space: nowrap;
    color: grey;
  }
`;

export const Label = styled.div`
  padding: 0 20px;
  display: ${props => props.sidebarOpen ? 'block' : 'none' };
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MenuButton = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #F4F4F4;
  width: 60px;
  & svg {
    width: 100%;
    height: 100%;
  }
  @media (hover: hover) {
    & svg:hover {
      transform: scale(1.25);
      color: #7be9ad;
    }
  }

  @media (hover: none) {
    & svg:active{
      transform: scale(1.25);
      transition: 0.1s;
      color: #7be9ad;
    }
  }
`;

export const CollapsedSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  color: #F4F4F4;

  @media (hover: hover) {
    & svg:hover{
      transform: scale(1.25);
      color: #7be9ad;
    }
  }

  @media (hover: none) {
    & svg:active{
      transform: scale(1.25);
      transition: 0.1s;
      color: #7be9ad;
    }
  }
  
  & svg {
    width: 30px;
    height: 30px;
  }
`;

export const Popout = styled.div`
  position: relative;
  display: inline-block;

  & > div {
    visibility: ${props => props.show ? 'visible' : 'hidden'}; 
    width: 280px;
    background-color: #192D3F;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 45px;
    left: 20px;
  }
`;