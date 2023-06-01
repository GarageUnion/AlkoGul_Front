import React from "react"
import {Link} from "react-router-dom"
import stockImage from "../img/image-bread-stock.png"

class BreadPanel extends React.Component{
    render()
    {
        return(
            <div>
                <Link className="panel">
                    <img src={stockImage}></img>
                    <h1 className="panelName"></h1>
                    <h1 className= "panelRating"></h1>
                </Link>
            </div>
        )
    }
}

export default BreadPanel