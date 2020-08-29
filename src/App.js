import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Sidebar from './components/Sidebar';
import Routes from './routes';

import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Container> */}
      <div className="d-flex">
        <Sidebar />
        <Routes />
      </div>
      {/* </Container> */}
    </BrowserRouter>
  );
}

export default App;
