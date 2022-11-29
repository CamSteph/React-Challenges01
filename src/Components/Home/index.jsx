import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 150vh;
  width: 100%;
  background: #0b192b;
  color: #ccc;
  padding: 120px 50px;
`;

const Home = () => {
  return (
    <Container>
      <h1>This is the HOME PAGE.</h1>
    </Container>
  );
};

export default Home;