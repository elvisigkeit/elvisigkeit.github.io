import React, { Component } from 'react';
import './App.css';
import Portal from './Portal';
import NotFound from './NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Portal} />
              <Route path="*" component={NotFound} />
          </Switch>
      </ BrowserRouter>
    );
  }
}

export default App;
