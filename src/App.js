import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth='sm'>
      <Router>
        <Switch>
          <Route path='/postDetail/:id'>
            <PostDetail></PostDetail>
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
