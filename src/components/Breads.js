import React from "react";
import BreadPanel from "./BreadPanel"
class Breads extends React.Component{
    render()
    {
        if(this.props.breads.length > 0)
            return (<div className='panelTable'>
                {this.props.breads.map((el) =>(
                    <BreadPanel key={el.id} bread={el}/>
                ))}  
            </div>)
        else
        return(<div>
            <h3>Хлеба нет</h3>
        </div>)
    }
}
export default Breads