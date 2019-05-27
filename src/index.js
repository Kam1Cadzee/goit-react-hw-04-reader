import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import ReaderPage from './components/pages/ReaderPage';

ReactDOM.render(
  <HashRouter basename="/">
    <Switch>
      <Route path="/reader" exact component={ReaderPage} />
      <Redirect to="/reader" />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
