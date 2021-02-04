import React from 'react'

import './CardContent.scss'

const CardContent = (props) => {

    return(
        <div className="contentRight">
            <div className="card-co">
                {props.children}
            </div>
        </div>
    )
}

export default CardContent;