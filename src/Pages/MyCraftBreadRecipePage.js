import React from 'react'
import Header from '../components/Header'


class MyCraftBreadRecipePage extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            inputName: "",
            textIngridient: "",
            textRecipe: "",
            isMachineRequired: false,
        }
    }
    inputClick = (event) =>{
        event.preventDefault();
        if((this.state.inputName!=="")&&(this.state.textIngridient!=="")&&(this.state.textRecipe!==""))
        {
            try {
                const response = fetch("http://localhost:5006/CraftBread", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'},
                    body: JSON.stringify({ name: this.state.inputName,
                            necessaryProducts: this.state.textIngridient,
                            isMachineRequired: this.state.isMachineRequired,
                            description: this.state.textRecipe,
                        })
                });
                const result= response;
                console.log('Успех:', JSON.stringify(result));
            } catch (error) {
                console.error('Ошибка:', error);
            }                 
        }
        else{

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
                            <h3>Название:</h3>
                            <input name = 'name'
                                type = "text" 
                                placeholder='Назовите рецепт'
                                onChange={(e) => this.setState({inputName: e.target.value})}
                            /><br></br>
                            <h3>Состав:</h3>
                            <textarea name = 'ingridients'
                                type = "recipe"
                                placeholder='Перечислите ингридиенты'
                                onChange={(e) => this.setState({textIngridient: e.target.value})}
                            /><br></br>
                            <h3>Используется печка?:</h3>
                            <input type="checkbox"  onChange={(e) => this.setState({isMachineRequired: !this.state.isMachineRequired})}></input><br></br>
                            <h3>Способ приготовления:</h3>
                            <textarea name = 'recipe'
                                type = "recipe" 
                                placeholder='Опишите способ приготовления'
                                onChange={(e) => this.setState({textRecipe: e.target.value})}
                            /><br></br>
                            <button type = 'submit' onClick={this.inputClick}>Поделиться</button>
                        </form> 
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default MyCraftBreadRecipePage