import React from "react"
import Logo from "./Logo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


class Browser extends React.Component {
    render() {
        const element = <FontAwesomeIcon icon={faArrowRight} size="3x" color="black" />
        return (
            <>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}} id="titulo"><h3>{Logo}</h3>
                    <ul id="Buscador">

                        <li><a href="#" >{element}</a></li>
                    </ul></div>
                <div id="Buscador1">
                    <ul >
                        <li><a href="#" >{element}</a></li>
                    </ul>
                </div>
                <p>Find your perfect trip, designed by who know and love their cities</p>

            </>

        )
    }
}

export default Browser