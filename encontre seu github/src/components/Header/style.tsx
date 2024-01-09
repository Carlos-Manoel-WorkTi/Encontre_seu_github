import styled, { keyframes } from 'styled-components';

export const Heade = styled.header`
background-color: #000000;
width: 100%;
margin: 0;
padding-top:1%;
display: flex;
justify-content: space-around;
align-items: center;
height: auto;
color: white;
text-align: center;
h1{
    font-size: 3em;
    
}
ul{
    display: flex;
    gap: 20px;
}
a{
    color: white;
    font-size: 1.4em;
}
`
 
export const Logo = styled.h1`
  font-size: 2em;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  color: #42297c;
  background-image: linear-gradient(45deg, rgb(67, 7, 174), #b48fe6); /* Definição do gradiente */
  -webkit-background-clip: text; 
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Tornar o texto transparente */
`;



import { Link } from 'react-router-dom';

const expandFromLeft = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const Active = styled.li`
  position: relative;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #6412e8;
    animation: ${expandFromLeft} 1s ease-in-out forwards;
  }
`;

export const LinkText = styled(Link)`
  color: #000; /* Cor do texto */
  text-decoration: none;
  font-weight: bold; /* Se desejar negrito */
  /* Outros estilos que você queira adicionar */
`;




