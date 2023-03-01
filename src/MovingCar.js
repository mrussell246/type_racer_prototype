import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import styled from 'styled-components';

// TYPING
var lettersToType = "Lorem Ipsum blah blah blah blah blah";
var lettersTypedRight = [];
var lettersTypedWrong = [];

// CAR
const StyledBoard = styled.section`
 width: 16rem;
 height: 16rem;
 position:relative;
`
const Square = styled.div`
  left: ${({ x }) => x+'px'};
  top: ${({ y }) => y+'px'};
  position:absolute;
`
function increment(x){
  return x + 5;
}
function decrement(x){
  return x - 5;
}
const actionXMap = {
   ArrowLeft: decrement,
   ArrowRight: increment
}
const actionYMap = {
   ArrowDown: increment,
   ArrowUp: decrement
}
function Board({}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleKeyPress(e){
    console.log(e.key);
    const actionX = actionXMap[e.key];
    const actionY = actionYMap[e.key];
    actionX && setX(actionX);
    actionY && setY(actionY);
  }

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
  },[])

  return (
    <div>
        <StyledBoard onKeyPress={handleKeyPress}>
        <Square x={x} y={y}>
            <img width={ '100px' } src="https://images.vexels.com/media/users/3/256755/isolated/preview/db1f1f8091208db0a017d7e585264595-blue-race-car-color-stroke.png"></img>
        </Square>
        </StyledBoard>

        {lettersToType.split("").map(word => <span>{word}</span>)}
    </div>
  )
}

export default Board;
// ReactDOM.render(<h1>HI</h1>, document.getElementById('root'));