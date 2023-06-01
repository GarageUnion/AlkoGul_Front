import React from 'react'
import Header from '../components/Header'


class MyRecipePage extends React.Component{
    render()
    {
        return(
            <div>
                <Header/>
                <div className='login'>
                    <div className='login-form'>
                        <form>
                            <br></br>
                            <h3>Email:</h3>
                            <input name = 'email' type = "text" placeholder='Введите email'/><br></br>
                            <h3>Пароль:</h3>
                            <input name = 'password' type = "password" placeholder='Введите пароль'/><br></br>
                            <button type = 'submit'>Войти</button>
                        </form> 
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default MyRecipePage