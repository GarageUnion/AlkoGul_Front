import React from 'react'
import Header from '../components/Header'


class EnterPage extends React.Component{
//     constructor()
//     {
//         super()
//         fetch('http://localhost:5001/Users/many')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
//     }
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

export default EnterPage