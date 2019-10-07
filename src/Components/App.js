import React from 'react';
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './Profile';
import BossStaff from './BossStaff';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../CSS/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={BossStaff} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
