import React, { Component } from 'react';

import respuesta from './assets/respuesta.json';
import SignalsBox from './components/Signalsbox';
import './App.css';


import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={SignalsBox} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
