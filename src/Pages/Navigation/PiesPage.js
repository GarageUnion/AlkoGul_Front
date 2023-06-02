import React from 'react'
import Header from "../../components/Header"
import { Link } from 'react-router-dom'
import PanelTable from '../../components/PanelTable'
class PiesPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
            pies:
            [
                {
                    recipeReviews:[],
                    id:4,
                    name:"Пирожок с капустой",
                    necessaryProducts:"Мука, капуста, соль, яйца, сахар, дрожжи",
                    description:"Для приготовления пирожка с капустой нужно всего лишь взять обычный советский...",
                    rate:0.0
                },
                {
                    recipeReviews:[],
                    id:5,
                    name:"Хачапури по-аджарски",
                    necessaryProducts:"Мука, сыр сулугуни, яйца, сахар, дрожжи",
                    description:"А вот хачапури... мы пекли их с моей матерью с самого моего детства, но никто не называет меня Гиви-пекарь",
                    rate:0.0
                }]
        }
    }
    render()
    {
        return(
            <div>
                <Header />
                <div>
                    <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                        <Link to = "/newRecipe"><button>Поделиться рецептом</button></Link>
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