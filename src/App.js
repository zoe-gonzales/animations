import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SpringPage from './components/SpringPage';
import Transition from './components/Transition';
import Trail from './components/Trail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/spring" component={SpringPage} />
        <Route path="/transition" component={Transition} />
        <Route path="/trail" component={Trail} />
      </Switch>
    </Router>
  )
}

export default App;
