import React from 'react'
import Header from "../components/Header"
import axios from 'axios'
import PanelTable from '../components/PanelTable'
//const baseUrl="https://reqres.in/api/users?page=1"

class ProductsPage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            products:
                [
                    {breadReviews:[],
                    id:1,
                    name:"Бородинский",
                    price:30.0,
                    category:2,
                    description:"Вкусный черный хлеб",
                    rate:0.0},

                    {breadReviews:[],
                    id:2,
                    name:"Багет",
                    price:50.0,
                    category:1,
                    description:"Здоровенная палка хлеба",
                    rate:0.0},

                    {breadReviews:[],
                    id:3,
                    name:"Булочка Коломенская",
                    price:50.0,
                    category:4,
                    description:"Обычная булка",
                    rate:0.0},

                    {breadReviews: [{id:1,review:"Вах как вкусно",rate:5,userId:3},
                                    {id:2,review:"Неплохо",rate:4,userId:2}],
                    id:4,
                    name:"Пирожок с картошкой",
                    price:45.0,
                    category:3,
                    description:"Самый вкусный на свете пирожок по версии Воваса",
                    rate:4.5}
                ]
        }
    }
    render()
    {
        return(
            <div>
                <Header />
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                </header>
                <div >
                    <PanelTable elements={this.state.products} emptyListMessage="Нет продукции"></PanelTable>
                </div>
            </div>
        )
    }
}

export default ProductsPage