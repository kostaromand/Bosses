import React from 'react';
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './Pages/Profile';
import BossStaff from './Pages/BossStaff';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './CSS/index.css';

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={BossStaff} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;