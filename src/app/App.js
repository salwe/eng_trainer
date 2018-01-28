import React, { Component } from 'react';
import Template from './Pages/Template.js';
import Home from './Pages/Home.js';
import Articles from './Pages/Articles.js';
import Dictionary from './Pages/Dictionary.js';
import '../css/App.css';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Template>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/articles" component={Articles} />
            <Route path="/dictionary" component={Dictionary} />
        </Switch>
    </Template>
    );
  }
}

export default App;
