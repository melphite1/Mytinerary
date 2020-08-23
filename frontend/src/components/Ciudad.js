
import React, { Component } from 'react'

export default class Ciudad extends Component {
    render() {
        return (
            <>
                <div style={{margin: "10px", border:"2px solid black", padding:"0", backgroundImage:`url(${this.props.ciudad.url})`, width:"350px", height:"350px", backgroundSize:"cover"}}>
                    <li>{this.props.ciudad.nameCity}</li>
                    {/* <img src={this.props.ciudad.url} style={{ width: "350px" }}></img> */}
                </div>
            </>
        )
    }
}
