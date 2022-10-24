import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align:center;
  padding: 0px 80px;

  @media(max-width:500px){
    padding: 0 20px;
  }
`;

const Button = styled.button`
  color: tomato;
  font-size: calc(5px + 2vmin);
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  background: transparent;
  transition: all 0.25s;
  position: absolute;
  bottom: 0;

  :hover {
    color: #000;
    background: tomato;
  }
`;

const Paragraph = styled.p`
  color: tomato;
  font-style: italic;
  font-size: 1.1em;
  
  &::before{
    content: '❝';
    font-size:2em;
    position:relative;
    margin-right:10px;
  }

  &::after{
    content: '❞';
    font-size:2em;
    position:relative;
    margin-left: 5px;
  }
`;

const Span = styled.span`
  text-transform: uppercase;
  font-size: calc(5px + 2vmin);
`;

export default function App(){
  const [isLoading, setIsLoading] = useState(false);
  const [randomQuotes, setRandomQuotes] = useState({});

  const handleClick = () => {
    setIsLoading(true);
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response)=> response.json())
      .then(data => {
        setRandomQuotes(data[0]);
        setIsLoading(false);
    });
  }

  useEffect(() => {
    handleClick();
  }, []);

  const { quote, character } = randomQuotes;

  return (
    <AppContainer>
      {isLoading === false &&
        <>
          <Paragraph>{quote}</Paragraph>
          <Span> - {character} - </Span>
        </>
      }
      <Button onClick={handleClick}>Get A New Quote!</Button>
    </AppContainer>
  );
};
