import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
overflow-y: auto;
`;

export const Resume = styled.iframe`
flex-grow: 1;
width: 100%;
max-width: 720px;
`;