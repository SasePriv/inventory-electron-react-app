import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsUserAuthenticated} from '../redux/user/user-selectors';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAutehnticated, ...rest}) => {
  return (
    <Route
      {...rest}
      render={ (props) => {
        if (isAutehnticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isAutehnticated: selectIsUserAuthenticated,
});

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAutehnticated: PropTypes.bool,
};

export default connect(mapStateToProps)(PrivateRoute);
