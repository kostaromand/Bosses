import React from 'react';
import Header from './Header'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Profile from './Profile';
import BossStaff from './BossStaff/BossStaff';

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
