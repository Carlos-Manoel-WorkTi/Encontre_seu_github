// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Container, GlobalStyle } from "./style/GlobalStyle";
import Header from "./components/Header/index.js";
function App() {
  return (
    <>
    <GlobalStyle/>   
      <Header /> 
      <Container>
     
     <Outlet />
      </Container>

    </>
  );
}

export default App;
