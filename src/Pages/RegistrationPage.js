import React from 'react'
import Header from '../components/Header'

class RegistrationPage extends React.Component{
    render()
    {
        return(
            <div>
                <Header/>
                <div className='login'>
                    <div className='login-form'>
                        <form>
                            <br></br>
                            <h3>Имя пользователя:</h3>
                            <input name = 'userName' type = "text" placeholder='Введите имя пользователя'/><br></br>
                            <h3>Email:</h3>
                            <input name = 'email' type = "text" placeholder='Введите email'/><br></br>
                            <h3>Пароль:</h3>
                            <input name = 'password' type = "password" placeholder='Введите пароль'/><br></br>
                            <input name = 'password' type = "password" placeholder='Подтвердите пароль'/><br></br>
                            <button type = 'submit'>Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default RegistrationPage