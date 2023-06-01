import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"

class MoonshinePage extends React.Component{
    render()
    {
        return(
            <div>
                <Header />
                <div>
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                    <Link to="/newRecipe"><button>Поделиться рецептом</button></Link>
                </header>
                </div>
            </div>
        )
    }
}

export default MoonshinePage