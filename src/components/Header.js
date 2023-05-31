import React from 'react'
import {Link} from "react-router-dom"
import alkogul from "../img/Golub_v_kruge.png"


class Header extends React.Component{

    render(){
        return(<div>
            <header className='topHeader' style={{
                display: 'flex'}}>
                <img src={alkogul}/>
                АлкоГуль
                    <button class="inverted" >Вход</button>
                    <button>Регистрация</button>
            </header>
            <header className='botHeader' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Link to ={'/'} className='Link'><button>Продукция</button></Link>
                <Link to ={'/cocktails'} className='Link'><button>Коктейли</button></Link>
                <Link to ={'/moonshine'} className='Link'><button>Самогон</button></Link>
            </header>
        </div>)
    }
}

export default Header 