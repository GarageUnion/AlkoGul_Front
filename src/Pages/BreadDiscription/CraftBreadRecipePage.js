import React from 'react'
import Header from "../../components/Header"
import craftBread from "../../img/CraftBread.png"


class CraftBreadRecipePage extends React.Component{
    render()
    {
        return(
            <div className='CraftBreadRecipe'>
                <Header />
                <div>
                    <h2>Фото крафтового хлеба:</h2>
                    <img src={craftBread}></img>
                    <h2>Ингридиенты:</h2>
                    <h2>Способ приготовления:</h2>
                </div>
            </div>
        )
    }
}

export default CraftBreadRecipePage