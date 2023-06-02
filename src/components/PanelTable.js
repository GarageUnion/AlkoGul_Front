import React from "react";
import BreadPanel from "./BreadPanel"
class PanelTable extends React.Component{
    render()
    {
        if(this.props.elements.length > 0)
            return (<div className='panelTable'>
                {this.props.elements.map((el) =>(
                    <BreadPanel key={el.id} data={el} link={this.props.link}/>
                ))}  
            </div>)
        else
        return(<div>
            <h3>{this.props.emptyListMessage}</h3>
        </div>)
    }
}
export default PanelTable