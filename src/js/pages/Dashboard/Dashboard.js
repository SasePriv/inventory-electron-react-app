import React from 'react'
import LeftNav from '../../components/NavBar/LeftNav/LeftNav'
import CardContent from '../../components/Content/CardContent/CardContent'

import './Dashboard.scss'

const Dashboard = () => {

    return(
        <div className="fondo">
            <LeftNav />
            <CardContent>
                <div>Hola</div>
            </CardContent>
        </div>
    )
}

export default Dashboard;