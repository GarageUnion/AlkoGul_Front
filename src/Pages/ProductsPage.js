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
                    <button>Добавить продукцию</button>
                </header>
                <BreadPanel/>
            </div>
        )
    }
}

export default ProductsPage