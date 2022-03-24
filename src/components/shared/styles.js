import styled from 'styled-components';
import { Card } from 'react-bootstrap'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 100%;
  color: #7be9ad; 
  text-align: center;
  padding: 20px;
  margin: 0;
  background-color: #192d3fd1;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 750px;
`;