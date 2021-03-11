import React from 'react';
import './app.scss';
import { Switch, HashRouter, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Inventory from './pages/Inventory/Inventory';

import Login from './pages/Login/Login';
import ProtectedRoute from './routes/protectedRoute';
import PrivateRoute from './routes/privateRoute';
import { store } from '../store/storeUserData';
import { connect } from 'react-redux';
import { autoLogInUser } from './redux/user/user-actions';

class App extends React.Component {    

    // componentDidMount(){
    //     const dataSaved = store.get('userData');
    //     const { autoLogInUser } = this.props;
    //     console.log(dataSaved)

    //     if(dataSaved.userId && dataSaved.companyId){
    //         console.log("ghola")
    //         autoLogInUser({userId: dataSaved.userId, companyId: dataSaved.companyId})
    //     }

    //     console.log("cuantas veces pasa esto")
    // }
    
    render(){
        return(
            <div>
                <HashRouter>
                    <Switch>
                        <ProtectedRoute exact path="/login" component={Login} />
                        <PrivateRoute exact path="/inventory" component={Inventory} /> 
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />                                            
                        <Redirect from="/" to="login" />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    autoLogInUser: (data) => dispatch(autoLogInUser(data))
});  

export default connect("",mapDispatchToProps)(App);