import React from 'react';
import styled from 'styled-components';
import TargetImg from '../../assets/target.png';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0b192b;
  color: #ccc;
  padding: 120px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 40px;
`;

const LeftWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;

const RightWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const Home = () => {
  return (
    <Container>
      <LeftWrapper>
        <Image src={TargetImg} />
      </LeftWrapper>
      <RightWrapper>
        <h1>Welcome to React Challenges 01!</h1>
        <p>To check out the first challenge, click to button below:</p>
        <Link to='/undo-redo'><Button color='primary'>Continue</Button></Link>
      </RightWrapper>
    </Container>
  );
};

export default Home;