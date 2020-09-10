import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="d-flex">
          <Sidebar />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}
