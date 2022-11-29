import React, { useState } from 'react';
import styled from 'styled-components';
import Breadcrumbs from '../../Components/Breadcrumbs';
import { Button } from 'reactstrap';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0b192b;
  color: #ccc;
  padding: 120px 50px;

  .challenge-details {
    opacity: .78;
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: grid;
  place-items: center;
`;

const Canvas = styled.main`
  width: 100%;
  min-width: 80VW;
  height: 100%;
  min-height: 50vh;
  background: #0e0f14;
  border-radius: 12px;
`;

const ActionWrapper = styled.div`
  width: 50%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 35px 15px;
`;

const Mark = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  border: 2px solid #f75753;
  position: absolute;
  top: ${props => props.posY}px;
  left: ${props => props.posX}px;
`;

const UndoRedo = () => {

  const [stackOfMoves, setStackOfMoves] = useState([]);
  const [removedMoves, setRemovedMoves] = useState([]);

  const setCoordinates = (e) => {
    setStackOfMoves(prev => {
      return [...prev, {x: e.pageX, y: e.pageY}];
    });
  };

  const undoMove = () => {
    if (stackOfMoves.length > 0 ) {
      setRemovedMoves(prev => {
        return [...prev, stackOfMoves[stackOfMoves.length - 1]]
      });
      setStackOfMoves(prev => {
        return [...prev].slice(0, -1);
      });
    }
  };

  const redoMove = () => {
    setStackOfMoves(prev => {
      return [...prev, removedMoves[removedMoves.length - 1]];
    });
    setRemovedMoves(prev => {
      return [...prev].slice(0, -1);
    });
  };

  const clearAllMoves = () => {
    setStackOfMoves([]);
    setRemovedMoves([]);
  };

  return (
    <Container>
      <Breadcrumbs currentPage='Undo-Redo' />
      <h1>UndoRedo Challenge</h1>
      <span className='challenge-details'>
        This is the Undo Redo challenge. 
        This challenge tests your knowledge of 
        DOM manipulation, Stack data strucuture, 
        and state usage in React. To begin, click on 
        any spot on the canvas below!
      </span>
      <CanvasContainer>
        <Canvas onClick={setCoordinates}>
          {
            stackOfMoves.length > 0 && 
            stackOfMoves.map((move, i) => {
              return (
                <Mark key={i} posX={move.x} posY={move.y} />
              )
            })
          }
        </Canvas>
        <ActionWrapper>
          <Button color='primary' onClick={undoMove} disabled={stackOfMoves.length > 0 ? false : true}>Undo</Button>
          <Button color='dark' onClick={redoMove} disabled={removedMoves.length > 0 ? false : true}>Redo</Button>
          <Button color='light' onClick={clearAllMoves} disabled={stackOfMoves.length > 0 ? false : true}>Clear</Button>
        </ActionWrapper>
      </CanvasContainer>
    </Container>
  );
};

export default UndoRedo;