import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
  align-self: flex-start;
  top: 0;
  padding-top: calc(1em + env(safe-area-inset-bottom));
  padding-bottom: calc(1em + env(safe-area-inset-bottom));
  background-color: black;
`;

export const SidebarWrapper = styled.div`
  width: ${props => props.sidebarOpen ? '300px' : '80px' };
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
    color: white;
    font-size: 25px;
    transition: all 0.25s ease-in-out;
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    flex-grow: 1;
  }

  & a:hover{
    transform: scale(1.25);
    color: #eb6a00;
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
  color: white;
  width: 80px;
  & svg {
    width: 100%;
    height: 100%;
  }
  & svg:hover {
    transform: scale(1.25);
    color: #eb6a00;
  }
`;

export const CollapsedSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  color: white;
  & svg:hover{
    transform: scale(1.25);
    color: #eb6a00;
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
    background-color: black;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 45px;
    left: 20px;
  }
`;