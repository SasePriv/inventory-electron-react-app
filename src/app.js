import React from 'react'
import './app.scss'
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'

class App extends React.Component {
    
    render(){
        return(
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Redirect from="/" to="login" />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default App;