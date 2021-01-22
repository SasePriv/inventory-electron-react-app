import React from 'react'
import './app.scss'

import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'

class App extends React.Component {
    
    render(){
        return(
            <div>
                <Dashboard />
            </div>
        )
    }
}

export default App;