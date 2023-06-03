import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../../components/Header"
import PanelTable from "../../components/PanelTable"
class CraftBreadPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
            craftBreads:[]
        }
        this.myFunc = this.myFunc.bind(this)
        this.myFunc(this)
    }
    myFunc = (that) => {
        fetch('http://localhost:5006/CraftBread/many') //http://:5000/Users/many
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({craftBreads: jsonStr});})
        .catch(error => console.error(error));
    }
    render()
    {
        return(
            <div>
                <Header />
                <div>
                    <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                        <Link to = "/newCraftBreadRecipe"><button>Поделиться рецептом</button></Link>
                    </header>
                    <div >
                        <PanelTable elements={this.state.craftBreads} link="/craftBreadRecipe" emptyListMessage="Нет Хлеба"></PanelTable>
                    </div>
                </div>
            </div>
        )
    }
}

export default CraftBreadPage