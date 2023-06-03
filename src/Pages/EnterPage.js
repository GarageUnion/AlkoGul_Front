import React from 'react'
import Header from '../components/Header'

class EnterPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            users: [],
            inputEmail: "",
            inputPassword: ""
        }
        this.myFunc = this.myFunc.bind(this)
        this.inputClick = this.inputClick.bind(this) 
        this.myFunc(this)
        console.log(this.state.users)
    }
    
     myFunc = (that) => {
            fetch('http://localhost:5001/Users/many') //http://:5000/Users/many
            .then(function(response){return response.json();})
            .then(function(jsonStr){that.setState({users: jsonStr});})
            .catch(error => console.error(error));
        }
    inputClick = (event) => {
        event.preventDefault();
        
        let flag=false; 
        this.state.users.map((user) => {
            if ((user.email === this.state.inputEmail) && (user.password === this.state.inputPassword)) {
                console.log(this.state.inputEmail)
                flag = true;

            }
        })
        if (!flag) {
            alert("Неверные почта и пароль");
            console.log(this.state.inputEmail)
            console.log(this.state.inputPassword) 
            console.log(this.state.users)
        }
        else{
            console.log("YOU THE BEST!!!")
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
                            <h3>Email:</h3>
                            <input name = 'email'
                                type = "text" 
                                placeholder='Введите email'
                                onChange={(e) => this.setState({inputEmail: e.target.value})}/><br></br>
                            <h3>Пароль:</h3>
                            <input  name = 'password'
                                    type = "password" 
                                    placeholder='Введите пароль'
                                    onChange={(e) => this.setState({inputPassword: e.target.value})}/><br></br>
                            <button type = 'button' onClick={this.inputClick}>Войти</button>
                        </form> 
                    </div>
                </div>
                    
            </div>
        )
    }
    
}

export default EnterPage