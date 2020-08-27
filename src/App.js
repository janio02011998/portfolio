import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import Routes from './routes';

import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
