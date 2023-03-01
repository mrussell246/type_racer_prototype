import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import styled from 'styled-components';


// TYPING
const lettersToTypeString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.".toLowerCase();
const lettersToTypeArray = lettersToTypeString.split("").map(letter => {return {"title": letter, "status": "untyped"}})

const CorrectLetter = styled.span`
 color: green;
`

const IncorrectLetter = styled.span`
 color: black; 
 background-color: rgba(255, 0, 0, 0.5);
`

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

const CarContainer = styled.div`
  width: ${({ w }) => w + '%'};
` 


function increment(x){
  return x + 35;
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
function Board({w}) {
  const [lettersToType, setLettersToType] = useState(lettersToTypeArray);
  const xPerLetter = 850 / lettersToType.length
  var incorrect = false;

  const [x, setX] = useState(0);
  const [typedRight, setTypedRight] = useState(false);

  function handleKeyPress(e){
    const letterIndex = lettersToType.findIndex(letter => letter.status === "untyped");
    const letter = lettersToType[letterIndex].title;

    if (lettersToType[letterIndex - 1]?.status === "incorrect") {
        incorrect = true;
    }  else {
        incorrect = false;
    }

    if (!incorrect) {
        if (e.key === letter) {
            lettersToType[letterIndex] = {"title": letter, "status": "correct"}
            setTypedRight(true);
        } else if (e.key === 'Backspace') {
            lettersToType[letterIndex - 1] = {"title": lettersToType[letterIndex - 1].title, "status": "untyped"}
        } else {
            lettersToType[letterIndex] = {"title": letter, "status": "incorrect"}
        }
    } else {
        if (e.key === 'Backspace') {
            lettersToType[letterIndex - 1] = {"title": lettersToType[letterIndex - 1].title, "status": "untyped"}
        } else {
            lettersToType[letterIndex] = {"title": letter, "status": "incorrect"}
        }
    }
    setLettersToType([...lettersToType]) 
  }

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
  },[])

  useEffect(()=>{
    if (typedRight) {
        setX(lettersToType.findIndex(letter => letter.status !== 'correct') * xPerLetter);
        setTypedRight(false);
    }
  },)

  return (
    <div>
        <StyledBoard onKeyPress={handleKeyPress}>
        <Square x={x} y={0}>
            <img width={ '100px' } src="https://images.vexels.com/media/users/3/256755/isolated/preview/db1f1f8091208db0a017d7e585264595-blue-race-car-color-stroke.png"></img>
        </Square>
        </StyledBoard>

        <div class="Typing-window">
            {lettersToType.map(letter => {
                if (letter.status === 'untyped') {
                    return <span>{letter.title}</span>
                } else if (letter.status === 'correct') {
                    return <CorrectLetter>{letter.title}</CorrectLetter>;
                } else {
                    return <IncorrectLetter>{letter.title}</IncorrectLetter>
                }
                })}
        </div>
    </div>
  )
}

export default Board;
// ReactDOM.render(<h1>HI</h1>, document.getElementById('root'));