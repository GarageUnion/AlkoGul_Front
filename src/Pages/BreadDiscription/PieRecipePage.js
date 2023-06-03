import React from 'react'
import Header from "../../components/Header"
import { useLocation } from 'react-router-dom'


class PieRecipePage extends React.Component{
    render()
    {
        return(
            <div className='PieRecipe'>
                <Header />
                <div>
                    <h2>Фото пирожка:</h2>
                    <h2>Ингридиенты:</h2>
                    <h2>Способ приготовления:</h2>
                </div>
            </div>
        )
    }
}

export default PieRecipePage