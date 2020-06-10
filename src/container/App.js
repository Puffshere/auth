import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import DashboardPage from '../components/dashboardPage';
import YourKnifePage from '../components/yourKnifePage';
import ForSalePage from '../components/forSalePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <PrivateRoute path='/dashboard' component={DashboardPage} />
            <PrivateRoute path='/yourKnives' component={YourKnifePage} />
            <PrivateRoute path='/forsale' component={ForSalePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;