import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Home from './routes/Home';
import Registry from './routes/registry';



function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route path="/" exact >
            <Home/>
          </Route>
          <Route path="/registry">
            <Registry/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
