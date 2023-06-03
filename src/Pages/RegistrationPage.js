import React from 'react'
import Header from '../components/Header'

class RegistrationPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            inputName: "",
            inputEmail: "",
            inputPassword: "",
            inputConfirmPassword: "",
        }
        this.inputClick = this.inputClick.bind(this) 
    }   
    inputClick = (event) => {
        event.preventDefault();
        let inputName=this.state.inputName;
        let inputEmail=this.state.inputEmail;
        let inputPassword=this.state.inputPassword;
        let inputConfirmPassWord=this.state.inputConfirmPassword;
        if((inputName!=="")&&(inputEmail!=="")&&(inputPassword!=="")&&(inputConfirmPassWord!==""))
        {
            if (inputPassword===inputConfirmPassWord)
            {
                try {
                    const response = fetch('http://localhost:5001/Users', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'},
                        body: JSON.stringify({ userName: inputName,
                                email: inputEmail,
                                password: inputPassword,
                            })
                    });
                    const result= response;
                    console.log('Успех:', JSON.stringify(result));
                } catch (error) {
                    console.error('Ошибка:', error);
                }                 
            }
            else{
                alert("Пароли не совпадают")
            }   
        }
        else
        {
            alert("Не вся поля заполнены")
        }
    }
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
                            <input  name = 'userName'
                                type = "text" 
                                placeholder='Введите имя пользователя'
                                onChange={(e) => this.setState({inputName: e.target.value})}
                            /><br></br>
                            <h3>Email:</h3>
                            <input name = 'email'
                                    type = "text"
                                    placeholder='Введите email'
                                    onChange={(e) => this.setState({inputEmail: e.target.value})}
                                /><br></br>
                            <h3>Пароль:</h3>
                            <input name = 'password'
                                type = "password" 
                                placeholder='Введите пароль'
                                onChange={(e) => this.setState({inputPassword: e.target.value})}
                            /><br></br>
                            <input name = 'password' 
                                type = "password" 
                                placeholder='Подтвердите пароль'
                                onChange={(e) => this.setState({inputConfirmPassword: e.target.value})}
                            /><br></br>
                            <button type = 'submit' onClick={this.inputClick}>Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default RegistrationPage