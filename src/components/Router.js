import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Scan from './Scan';
import App from './App';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/scan" component={Scan} />
    </Switch>
  </BrowserRouter>
);

export default Router;