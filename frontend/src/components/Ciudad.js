import React, { Component } from 'react'




export default class Ciudad extends Component {
    render() {
            return (

                <>


                    <div style={{ margin: "20px 10px", border: "2px solid black", padding: "0", backgroundImage: `url(${this.props.ciudad.url})`, width: "350px", height: "350px", backgroundSize: "cover", display: "flex", justifyContent: "center" }} id="sombraX">
                        <li style={{ fontSize: "30px", color: "white", fontFamily: "Permanent Marker cursive", padding: " 0 10px", borderRadius: "20%", margin: "30px", display: "flex", justifyContent: "center" }}>{this.props.ciudad.nameCity}</li>
                    </div>


                </>
            )
        

    }
}
