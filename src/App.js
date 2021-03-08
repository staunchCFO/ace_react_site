import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import Homepage from "./Screen/Homepage"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          {/* <Route path="/sign-up" component={SignupPage} />
          <Route path="/sign-in" component={LoginPage} /> */}
          <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
