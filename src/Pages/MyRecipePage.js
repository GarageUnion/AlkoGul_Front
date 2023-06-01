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
                            <h3>Название:</h3>
                            <input name = 'name' type = "text" placeholder='Назовите рецепт'/><br></br>
                            <h3>Состав:</h3>
                            <input name = 'ingridients' type = "text" placeholder='Перечислите ингридиенты'/><br></br>
                            <h3>Способ приготовления:</h3>
                            <textarea name = 'recipe' type = "recipe" placeholder='Опишите способ приготовления'/><br></br>
                            <button type = 'submit'>Поделиться</button>
                        </form> 
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default MyRecipePage