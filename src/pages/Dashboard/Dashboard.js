import React from 'react'
import LeftNav from '../../components/NavBar/LeftNav/LeftNav'
import CardContent from '../../components/Content/CardContent/CardContent'
import Button from '@material-ui/core/Button'

import './Dashboard.scss'
import Drawer from '@material-ui/core/Drawer'

const Dashboard = () => {

    return(
        <div className="fondo">
            <LeftNav titleWindow="Dashboard">
                <div>hola</div>
            </LeftNav>
        </div>
    )
}

export default Dashboard;