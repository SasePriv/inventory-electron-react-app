import React from 'react'

import LeftNav from '../../components/NavBar/LeftNav/LeftNav'
import Invetory from '../Inventory/Inventory'

import './Dashboard.scss'



const Dashboard = () => {

    return(
        <div className="fondo">
            <LeftNav titleWindow="Dashboard">
                <Invetory />
            </LeftNav>
        </div>
    )
}

export default Dashboard;