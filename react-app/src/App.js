import React, { Component } from 'react';
import Portal from './Portal';
import NotFound from './NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Academia from './academia/Academia';
import SigninAcademia from './academia/SigninAcademia'
import Realm from './realm/Realm';
import Post from './realm/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
          <Switch>
              <Route path="/" exact component={Portal} />
              <Route path="/academia" exact component={Academia}/>
              <Route path="/academia/signin" exact component={SigninAcademia}/>
              <Route path="/realm" exact component={Realm}/>
              <Route path="/realm/post/:postid" exact component={Post}/>
              <Route path="*" component={NotFound} />
          </Switch>
      </ BrowserRouter>
    );
  }
}

export default App;
