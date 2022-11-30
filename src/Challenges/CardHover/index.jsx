import React, { useRef, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import Breadcrumbs from '../../Components/Breadcrumbs';
import Dog01 from '../../assets/dog01.jpg';
import Dog02 from '../../assets/dog02.jpg';
import Dog03 from '../../assets/dog03.jpg';
import Dog04 from '../../assets/dog04.jpg';
import Cat01 from '../../assets/cat01.jpg';
import Cat02 from '../../assets/cat02.jpg';
import Cat03 from '../../assets/cat03.jpg';
import Cat04 from '../../assets/cat04.jpg';
import { Button } from 'reactstrap';

const loveImg = keyframes`
  to {
    transform: translate(65px, 240px) scale(0) rotate(360deg);
  }
`;

const hateImg = keyframes`
  to {
    transform: translate(-65px, 240px) scale(0) rotate(360deg);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0b192b;
  color: #ccc;
  padding: 120px 50px;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const CardGroup = styled.div`
  min-height: 60vh;
  display: grid;
  place-items: center;
  position: relative;
  display: ${props => props.isSelected ? 'grid' : 'none'};
  filter: brightness(${props => props.ii % 2 === 0 ? '55%' : '100%'});

  &.loveImage {
    animation: ${loveImg} 1s ease;
  }

  &.hateImage {
    animation: ${hateImg} 1s ease;
  }

  .big-card {
    width: 9rem;
    height: 12rem;
    background: rgba(255, 255, 255, .3);
    border-radius: 8px;
    position: absolute;
    transition: transform .5s cubic-bezier(0.6, 0.04, .58, 1);
    background-size: contain;
    display: grid;
    place-items: center;

    &:first-child {
      transform: ${props => props.isHovering ? 'translate(-30px, 122px) rotate(-15deg)' : 'translate(-30px, 20px) rotate(-15deg)'};
      background-image: url(${Dog01});
    }

    &:nth-child(3) {
      transform: ${props => props.isHovering ? 'translate(65px, 122px) rotate(10deg)' : 'translate(-15px, 12px) rotate(-10deg)'};
      background-image: url(${Dog02});
      z-index: 5;
    }

    &:nth-child(5) {
      transform: ${props => props.isHovering ? 'translate(-60px, -60px) rotate(-8deg)' : 'translate(-10px, 10px) rotate(-2deg)'};
      background-image: url(${Dog03});
      z-index: 10;
    }

    &:nth-child(7) {
      transform: ${props => props.isHovering ? 'translate(65px, -65px) rotate(2deg)' : 'translate(-5px, 5px) rotate(8deg)'};
      background-image: url(${Dog04});
      z-index: 15;

      h1 {
        font-size: 80px;
      }
    }
  }

  .small-card {
    width: 3.5rem;
    height: 5rem;
    background: rgba(255, 255, 255, .3);
    border-radius: 8px;
    position: absolute;
    transition: transform .5s ease-in-out;
    background-size: contain;

    &:nth-child(2) {
      transform: ${props => props.isHovering ? 'translate(160px, 180px) rotate(35deg)' : 'translate(30px, 60px) rotate(-15deg)'};
      background-image: url(${Cat01});
    }

    &:nth-child(4) {
      transform:  ${props => props.isHovering ? 'translate(-130px, 160px) rotate(-30deg)' : 'translate(-50px, 60px) rotate(-15deg)'};
      background-image: url(${Cat02});
    }

    &:nth-child(6) {
      transform: ${props => props.isHovering ? 'translate(170px,-70px) rotate(-25deg)' : 'translate(30px, 20px) rotate(-15deg)'};
      background-image: url(${Cat03});
    }

    &:last-child {
      transform: ${props => props.isHovering ? 'translate(-170px,-60px) rotate(25deg)' : 'translate(-50px, 30px) rotate(-15deg)'};
      background-image: url(${Cat04});
    }
  }
`;

const BtnWrapper = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
`;

const CardHover = () => {

  const [hovering, setHovering] = useState(false);
  const [mappedCardGroups, setMappedCardGroups] = useState(Array(5).fill(Math.floor(Math.random() * 777)));
  const [selectedImg, setSelectedImg] = useState(Math.floor(mappedCardGroups.length / 2));
  const [groupLoved, setGroupLoved] = useState(false);
  const [groupHated, setGroupHated] = useState(false);
  const [groupOfCardsArray, setGroupOfCardsArray] = useState([
    [Dog01, Dog02, Dog03, Dog04, Cat01, Cat02, Cat03, Cat04],
    [Dog01, Dog02, Dog03, Dog04, Cat01, Cat02, Cat03, Cat04],
    [Dog01, Dog02, Dog03, Dog04, Cat01, Cat02, Cat03, Cat04],
    [Dog01, Dog02, Dog03, Dog04, Cat01, Cat02, Cat03, Cat04],
    [Dog01, Dog02, Dog03, Dog04, Cat01, Cat02, Cat03, Cat04],
  ])

  const handleLoveImage = (index) => {
    if ( selectedImg < mappedCardGroups.length - 1 ) {
      setSelectedImg(prev => {
        console.log('prev Selected is: ', prev);
        const currPrev = prev;
        setMappedCardGroups(prev => {
          console.log([...prev]);
          return [...prev].filter((_, i) => i !== currPrev + 1);
        });
        return prev + 1
      });
    }else {
      setSelectedImg(0);
    }
    setGroupLoved(true);
    setGroupHated(false);
  };

  const handleHateImage = () => {
    if ( selectedImg > 0 ) {
      setSelectedImg(prev => prev - 1)
    }else {
      setSelectedImg(mappedCardGroups.length - 1);
    }
    setGroupHated(true);
    setGroupLoved(false);
  };

  const handleHover = () => {
    setHovering(prev => !prev);
  };

  return (
    <Container>
      <Breadcrumbs currentPage='Card Hover' />
      <h1>CardHover</h1>
      <span>This is the Card Hover challenge. This challenge puts your CSS skills to the ulitmate test!</span>
      <CardContainer>
      {
        mappedCardGroups.length > 0 ? (
          mappedCardGroups.map((cardGroup, i) => (
          <CardGroup 
            className={groupLoved ? 'loveImage' : groupHated ? 'hateImage' : ''} 
            onMouseOver={handleHover} 
            onMouseOut={handleHover} 
            isSelected={i===selectedImg} 
            key={i} 
            ii={i % 2 === 0} 
            isHovering={hovering}
          >
            <div className="big-card"></div>
            <div className="small-card"></div>
            <div className="big-card"></div>
            <div className="small-card"></div>
            <div className="big-card"></div>
            <div className="small-card"></div>
            <div className="big-card"><h1>{i}</h1></div>
            <div className="small-card"></div>
          </CardGroup>
        ))
        ) : (
          <h1>No more cards to rate!</h1>
        )
      }
      </CardContainer>
      <BtnWrapper>
        <Button onClick={handleHateImage} color='danger'>Hate</Button>
        <Button onClick={() => handleLoveImage(Math.floor(mappedCardGroups.length / 2))} color='primary'>Love</Button>
      </BtnWrapper>
    </Container>
  );
};

export default CardHover;