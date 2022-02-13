import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 5% 10%;
  background-color: #2c485bb3;
  margin: 40px;
  border-radius: 10px;
  & h1,h3 {
    color: #F4F4F4;
    padding: 10px;
  }
  & h1 {
    font-size: 26px;
  }
  & h3 {
    font-size: 20px;
  }
`;