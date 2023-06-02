import React from 'react'
import Header from "../components/Header"
import BreadPanel from "../components/BreadPanel"
import { Link } from 'react-router-dom'
class PiesPage extends React.Component{
    render()
    {
        return(
            <div>
                <Header />
                <div>
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                <Link to = "/newRecipe"><button>Поделиться рецептом</button></Link>
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

export default PiesPage