import React from 'react'
import Header from "../../components/Header"
import { useLocation } from 'react-router-dom'


class ProductDiscriptionPage extends React.Component{
    render()
    {
        return(
            <div className='ProductDiscription'>
                <Header />
                <div>
                    <h2>Фото пирожка:</h2>
                    <h2>Описание:</h2>
                </div>
            </div>
        )
    }
}

export default ProductDiscriptionPage