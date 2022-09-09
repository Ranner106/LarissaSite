import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Relaxante from './pages/Relaxante'
import './App.css';
import './index.css'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>

           <Route
            exact
            path="/"
            component={Home}
          />

          <Route
            exact
            path="/relaxante"
            component={Relaxante}
          />
          
        </Switch>
      </BrowserRouter>


    );
  }
}

export default App;
