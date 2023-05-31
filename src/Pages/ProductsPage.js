import React from 'react'
import Header from "../components/Header"

class ProductsPage extends React.Component{
    render()
    {
        return(
            <div>
                <Header />
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                    <button>Добавить продукцию</button>
                </header>
            </div>
        )
    }
}

export default ProductsPage