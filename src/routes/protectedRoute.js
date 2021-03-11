import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsUserAuthenticated } from '../redux/user/user-selectors';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component,isAutehnticated,...rest}) => {
    return(
        <Route 
            {...rest}
            render={props => {
                if(!isAutehnticated){
                    return <Redirect to="/inventory" />
                }else{
                    return <Component {...props} />
                }
            }}
        />
    )
}

const mapStateToProps = createStructuredSelector({
    isAutehnticated: selectIsUserAuthenticated
})

export default connect(mapStateToProps)(ProtectedRoute);