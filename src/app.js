/* eslint-disable react/prop-types */
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
import Databases from './pages/Databases/Database';

// Routes Protection
import ProtectedRoute from './routes/protectedRoute';
import PrivateRoute from './routes/privateRoute';

// React Reduxe
import {store} from '../store/storeUserData';
import {connect} from 'react-redux';
import {autoLogInUser} from './redux/user/user-actions';

// Toast
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import './app.scss';

class App extends React.Component {
  componentDidMount() {
    const dataSaved = store.get('userData');
    const {autoLogInUser} = this.props;

    if (dataSaved.userId && dataSaved.companyId) {
      autoLogInUser({userId: dataSaved.userId, companyId: dataSaved.companyId});
    }

    // Example Toast

    // toast.success('🦄 Wow so easy!', {
    //   position: 'top-right',
    //   autoClose: 15000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
  }

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
            <PrivateRoute exact path="/database" component={Databases} />
            <Redirect from="/" to="inventory" />
          </Switch>
        </HashRouter>
        <ToastContainer />
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
