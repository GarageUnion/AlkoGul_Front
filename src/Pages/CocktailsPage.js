import React from 'react'
import Header from "../components/Header"

class CocktailsPage extends React.Component{
    render()
    {
        return(
            <div>
                <Header />
                <div>
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                    <button>Поделиться рецептом</button>
                </header>
                </div>
            </div>
        )
    }
}

export default CocktailsPage