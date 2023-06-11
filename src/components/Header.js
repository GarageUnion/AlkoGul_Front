import React from 'react'
import {Link} from "react-router-dom"
import alkogul from "../img/Golub_v_kruge.png"
import { IoExitOutline} from 'react-icons/io5'

class Header extends React.Component{
    loggedIn=localStorage.getItem('loggedIn');
    profileName=localStorage.getItem('profileName')
    render(){
        if (this.loggedIn) return(<div>
            <header className='topHeader' style={{
                display: 'flex'}}>
                <div className="leftContainer">
                <img src={alkogul}/>
                ReBREADing
                </div>
                <div className="rightContainer">
                    <label className='profileName'>{this.profileName}</label>
                    <IoExitOutline className='exitIcon' 
                    onClick={()=>{localStorage.setItem('loggedIn', "")
                                  window.history.go()}}>
                    </IoExitOutline>
                </div>
            </header>
            <header className='botHeader' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Link to ={'/'} className='Link'><button>Продукция</button></Link>
                <Link to ={'/pies'} className='Link'><button>Пирожки</button></Link>
                <Link to ={'/craftbread'} className='Link'><button>Хлеб</button></Link>
            </header>
        </div>)


        else return(<div>
            <header className='topHeader' style={{
                display: 'flex'}}>
                <div className="leftContainer">
                <img src={alkogul}/>
                ReBREADing
                </div>
                <div className="rightContainer">
                    <Link to="/Enter" className="LinkEnter"><button className="Enter" >Вход</button></Link>
                    <Link to="/Registration" className="LinkRegistration"><button className="Registration" >Регистрация</button></Link>
                </div>
            </header>
            <header className='botHeader' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Link to ={'/'} className='Link'><button>Продукция</button></Link>
                <Link to ={'/pies'} className='Link'><button>Пирожки</button></Link>
                <Link to ={'/craftbread'} className='Link'><button>Хлеб</button></Link>
            </header>
        </div>)
    }
}

export default Header 