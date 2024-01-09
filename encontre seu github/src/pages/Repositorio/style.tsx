import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Column = styled.div`
    display: flex;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin-bottom: 10px;
`

export const SearchInput = styled.input`
  color: #ffffff;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: rgb(17, 19, 20);
  width: 450px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 76, 255, 0.619);
  }
`;

// create um div call as Perfil and a as Name and other as img
export const Perfil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`

export const NameBios = styled.div`
  display: flex;
  flex-direction: column;
  h2{
    color: white;
  }
  h4{
    color: gray;
  }

`

export const Img = styled.img`
  width: 50px;
  border-radius: 50%;
`
// VOLTAR
export const RowLine = styled.div`
  margin-top: 20px;
  width: 65%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #3b059e9b;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  h4{
    color: white;
    font-size: 1.5em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`
export const Voltar = styled(Link)`

`
//  ------------------REPOSITORIOS------------------
export const ContainerRepositorios = styled.div`
  width: 65%;
  padding-top: 0%;
  display: flex;
  flex-wrap: wrap; /* Permite que os elementos quebrem para a próxima linha */
  justify-content: center; /* Espaço igual entre os elementos */
  align-items: flex-start; /* Alinhamento ao topo */
  gap: 30px;
  padding-top: 70px;
  background-color: #0707079b;
`

export const BlockRepositorio = styled.div`
  flex: 0 0 calc(24.33% - 30px); /* Calcula 33.33% - 30px de gap entre os elementos */
  height: 70px;
  background-color: #0e0e0ef6;
  display: flex;
  justify-content: start;
  align-items: start;
  border-radius: 20px;
  margin-bottom: 30px; /* Adiciona um espaçamento entre as linhas */
`

export const NameRepositorio = styled.div`
  color: white;
  margin: 10px;
`

