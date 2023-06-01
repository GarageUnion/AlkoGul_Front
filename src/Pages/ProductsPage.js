import React from 'react'
import Header from "../components/Header"
import BreadPanel from "../components/BreadPanel"

class ProductsPage extends React.Component{
    render()
    {
        return(
            <div>
                <Header />
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                </header>
                <div className='panelTable'>
                    <BreadPanel/>
                    <BreadPanel/>
                    <BreadPanel/>
                </div>
            </div>
        )
    }
}

export default ProductsPage