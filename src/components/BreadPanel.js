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
                        <h1 className="name">Хлеб</h1>
                        <label className="rating">5/5</label>
                    </div>
                </Link>
            </form>
            </div>
        )
    }
}

export default BreadPanel