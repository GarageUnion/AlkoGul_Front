import React from 'react'
import Header from "../../components/Header"
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { Review } from '../../components/Review';
const PieRecipePage = (props) => {

    let { id } = useParams(); 

    useEffect(() => {
        console.log(`${id}`);
    },[]);
    return (<Description id={id}></Description>)
}
class Description extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pie: {},
            pieLink: 'http://localhost:5218/api/Recipes/one/'+this.props.id.toString(),
            picture: "",
            pictureLink: 'http://localhost:5218/Pictures/'+this.props.id.toString(),
            commentInput: "",
        }
        this.TakePie = this.TakePie.bind(this)
        this.TakePie(this)
    }
    TakePie = (that) => {
        fetch(that.state.pieLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({pie: jsonStr});})
        .catch(error => console.error(error));
    }
    render(){
        return(
            <div>
            <Header></Header>
            <div className='description'>
                <div>
                <img src={this.state.picture}></img>
                        <h1>{this.state.pie.name}</h1>
                        <label>{this.state.pie.rate}/5</label>
                </div>
                <div>
                    <h1>Состав:</h1>
                    <label>{this.state.pie.necessaryProducts}</label>
                    <h1>Рецепт:</h1>
                    <label>{this.state.pie.description}</label>
                </div>
                <div>
                    {this.state.pie.recipeReviews?.map((el) =>(<Review data={el}></Review>))}
                    <textarea className='comment' placeholder="Оставьте отзыв"
                        onChange={(e) => this.setState({commentInput: e.target.value})}></textarea>
                    <button className type = 'button' onClick={this.inputClick}>Отправить отзыв</button>
                </div>
            </div>
            </div>
        )
    }
}

export default PieRecipePage