import React from 'react'
import './app.scss'
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import ProtectedRoute from './routes/protectedRoute'
import PrivateRoute from './routes/privateRoute'

class App extends React.Component {
    
    render(){
        return(
            <div>
                <HashRouter>
                    <Switch>
                        <ProtectedRoute exact path="/login" component={Login} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <Redirect from="/" to="login" />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default App;