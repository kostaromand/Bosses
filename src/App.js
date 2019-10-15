import React from 'react';
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './Pages/Profile';
import BossStaff from './Pages/BossStaff';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './CSS/index.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBosses } from './redux/reducers/bosses/actions'


class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchBosses();
  }

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
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchBosses
  },
    dispatch
  )
)

export default connect(null, mapDispatchToProps)(App);
