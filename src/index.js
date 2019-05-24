import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import ReaderPage from './components/pages/ReaderPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/reader" exact component={ReaderPage} />
      <Redirect to="/reader" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
