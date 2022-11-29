import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0b192b;
  color: #ccc;
  padding: 120px 50px;
`;

const CardHover = () => {
  return (
    <Container>
      <h1>CardHover</h1>
    </Container>
  );
};

export default CardHover;