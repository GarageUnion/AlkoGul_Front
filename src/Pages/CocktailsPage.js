import React from 'react'
import Header from "../components/Header"
import BreadPanel from "../components/BreadPanel"
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
                <div className='panelTable'>
                    <BreadPanel/>
                    <BreadPanel/>
                </div>
                </div>
            </div>
        )
    }
}

export default CocktailsPage