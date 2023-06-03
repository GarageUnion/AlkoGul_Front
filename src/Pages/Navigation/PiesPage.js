import React from 'react'
import Header from "../../components/Header"
import { Link } from 'react-router-dom'
import PanelTable from '../../components/PanelTable'
class PiesPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
            pies:[]
            
        }
        this.myFunc = this.myFunc.bind(this)
        this.myFunc(this)
    }
    myFunc = (that) => {
        fetch('http://localhost:5218/api/Recipes/many') //http://:5000/Users/many
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({pies: jsonStr});})
        .catch(error => console.error(error));
    }
    render()
    {
        return(
            <div>
                <Header />
                <div>
                    <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                        <Link to = "/newRecipe" ><button>Поделиться рецептом</button></Link>
                    </header>
                    <div>
                    <PanelTable elements={this.state.pies} link="/pieRecipe" emptyListMessage="Нет пирожков"></PanelTable>
                    </div>
                </div>
            </div>
        )
    }
}

export default PiesPage