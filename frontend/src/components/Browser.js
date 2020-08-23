import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"



class Browser extends React.Component {
    render() {
        const element = <FontAwesomeIcon icon={faArrowRight} size="3x" color="black" />
        return (
            <>
        

                <div id="Buscador1">
                    <p style= {{marginRight:"30px", fontSize:"40px", fontWeight:"bolder"}}>Let's travel, Go to cities!</p>
                    <ul >
                
                        <li><NavLink to="/Cities">{element}</NavLink></li>
                    </ul>
                </div>
                <p>Find your perfect trip, designed by who know and love their cities</p>

            </>

        )
    }
}

export default Browser