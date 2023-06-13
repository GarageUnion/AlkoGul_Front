import React from 'react'
import Header from "../../components/Header"
import PanelTable from '../../components/PanelTable'
//const baseUrl="https://reqres.in/api/users?page=1"

class ProductsPage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            products:[]
        }
        this.myFunc = this.myFunc.bind(this)
        this.myFunc(this)
    }
    myFunc = (that) => {
        fetch('http://localhost:5062/Bread/many') 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({products: jsonStr});})
        .catch(error => console.error(error));
    }
    render()
    {
        return(
            <div>
                <Header />
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                </header>
                <div >
                    <PanelTable elements={this.state.products} link="/product/" emptyListMessage="Нет продукции"></PanelTable>
                </div>
            </div>
        )
    }
}

export default ProductsPage