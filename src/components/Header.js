import React from 'react'
import {Link} from "react-router-dom"
import alkogul from "../img/Golub_v_kruge.png"


class Header extends React.Component{

    render(){
        return(<div>
            <header className='topHeader' style={{
                display: 'flex'}}>
                <div class="leftContainer">
                <img src={alkogul}/>
                АлкоГуль
                </div>
                <div class="rightContainer">
                    <Link to="/Enter" className="LinkEnter"><button class="Enter" >Вход</button></Link>
                    <Link to="/Registration" className="LinkRegistration"><button class="Registration" >Регистрация</button></Link>
                </div>
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