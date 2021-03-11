// React
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
// React Redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsUserAuthenticated} from '../redux/user/user-selectors';

const ProtectedRoute = ({component: Component, isAutehnticated, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAutehnticated) {
          return <Redirect to="/vendors" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isAutehnticated: selectIsUserAuthenticated,
});

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  isAutehnticated: PropTypes.bool,
};

export default connect(mapStateToProps)(ProtectedRoute);
