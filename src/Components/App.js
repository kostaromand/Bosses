import React from 'react';
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './Profile';
import BossStaff from './BossStaff';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../CSS/index.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBossesThunk as fetchBosses } from '../redux/reducers/bosses/actions'


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
            <Route path="/profile" component={Profile} />
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
