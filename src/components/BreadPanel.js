import React from "react"
import {Link} from "react-router-dom"
import stockImage from "../img/image-bread-stock.png"

class BreadPanel extends React.Component{

    render()
    {
        return(
            <div>
            <form className="panel">
                <Link className="LinkPanel" >
                    <div>
                        <img src={stockImage}></img>
                        <h1 className="name"> {this.props.bread.name} </h1>
                        <label className="rating">{this.props.bread.rate}</label>
                    </div>
                </Link>
            </form>
            </div>
        )
    }
}

export default BreadPanel