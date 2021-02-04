import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faBoxOpen, faTruckLoading, faPeopleCarry, faCog } from '@fortawesome/free-solid-svg-icons'

import './LeftNav.scss'

const LeftNav = () => {



    return(
        <div className="LeftNav">
            <div class="sidenav">
                <div className="logoMenu">
                    <h5>Hola</h5>
                    <h5>Como Estas</h5>
                </div>

                <div className="separatorLineMenu" />
                
                <a href="#" className="active">
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faTachometerAlt} className="icon"/>
                        <h5>Dashboard</h5>
                    </div>
                </a>
                <a href="#">
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faBoxOpen} className="icon"/>
                        <h5>Inventario</h5>
                    </div>
                </a>
                <a href="#">
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faTruckLoading} className="icon"/>
                        <h5>Provedores</h5>
                    </div>
                </a>
                <a href="#">
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faPeopleCarry} className="icon"/>
                        <h5>Clientes</h5>
                    </div>
                </a>

                <div className="separatorLineMenu" />

                <a href="#">
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faCog} className="icon"/>
                        <h5>Ajustes</h5>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default LeftNav;