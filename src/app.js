// React
import React from 'react';
// import PropTypes from 'prop-types';
import {Switch, HashRouter, Redirect} from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login';
import Vendors from './pages/vendors/Vendors';
import Sales from './pages/Sales/Sales';

// Routes Protection
import ProtectedRoute from './routes/protectedRoute';
import PrivateRoute from './routes/privateRoute';

// React Reduxe
// import {store} from '../store/storeUserData';
import {connect} from 'react-redux';
import {autoLogInUser} from './redux/user/user-actions';

// Styles
import './app.scss';

class App extends React.Component {
  // componentDidMount() {
  //   const dataSaved = store.get('userData');
  //   const {autoLogInUser} = this.props;
  //   console.log(dataSaved);

  //   if (dataSaved.userId && dataSaved.companyId) {
  //     autoLogInUser({userId: dataSaved.userId, companyId: dataSaved.companyId});
  //   }
  // }

  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <ProtectedRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/inventory" component={Inventory} />
            <PrivateRoute exact path="/vendors" component={Vendors} />
            <PrivateRoute exact path="/sales" component={Sales} />
            <Redirect from="/" to="inventory" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  autoLogInUser: (data) => dispatch(autoLogInUser(data)),
});

// App.propTypes = {
//   autoLogInUser: PropTypes.func,
// };

export default connect('', mapDispatchToProps)(App);
