import React from 'react'
import Header from "../components/Header"
import BreadPanel from "../components/BreadPanel"
import axios from 'axios'
//const baseUrl="https://reqres.in/api/users?page=1"

class ProductsPage extends React.Component{
    constructor(props){
        super(props)
        //axios.get(baseUrl).then((res)=>{
          //  console.log(res.data)
        //})
    }
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