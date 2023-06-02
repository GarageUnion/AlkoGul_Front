import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import PanelTable from "../components/PanelTable"
class CraftBreadPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
            craftBreads:
            [
                {
                    breadReviews:[],
                    id:2,
                    name:"Черный хлеб",
                    necessaryProducts:"Только мука",
                    isMachineRequired:true,
                    description:"тест2",
                    rate:0.0
                },
                {
                    breadReviews:[   {id:1,review:"Вкусно!",rate:5,userId:4},
                                        {id:2,review:"Не вкусно!",rate:2,userId:5}],
                    id:1,
                    name:"Белый хлеб",
                    necessaryProducts:"Мука и что-то еще",
                    isMachineRequired:true,
                    description:"тестестест",
                    rate:3.5
                }
            ]
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
                    <div >
                        <PanelTable elements={this.state.craftBreads} emptyListMessage="Нет Хлеба"></PanelTable>
                    </div>
                </div>
            </div>
        )
    }
}

export default CraftBreadPage