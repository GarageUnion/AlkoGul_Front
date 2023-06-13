import React from 'react'
import Header from "../../components/Header"
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { Review } from '../../components/Review';
const CraftBreadRecipePage = (props) => {

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
            craftBread: {},
            craftBreadLink: 'http://localhost:5006/CraftBread/one/'+this.props.id.toString(),
            picture: "",
            pictureLink: 'http://localhost:5006/Pictures/'+this.props.id.toString(),
            commentInput: "",
        }
        this.TakePie = this.TakePie.bind(this)
        this.TakePie(this)
    }
    TakePie = (that) => {
        fetch(that.state.craftBreadLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({craftBread: jsonStr});})
        .catch(error => console.error(error));
    }
    render(){
        return(
            <div>
            <Header></Header>
            <div className='description'>
                <div>
                <img src={this.state.picture}></img>
                        <h1>{this.state.craftBread.name}</h1>
                        <label>{this.state.craftBread.rate}/5</label>
                </div>
                <div>
                    <h1>Состав:</h1>
                    <label>{this.state.craftBread.necessaryProducts}</label>
                    <h1>Рецепт:</h1>
                    <label>{this.state.craftBread.description}</label>
                </div>
                <div>
                    {this.state.craftBread.breadReviews?.map((el) =>(<Review data={el}></Review>))}
                    <textarea className='comment' placeholder="Оставьте отзыв"
                        onChange={(e) => this.setState({commentInput: e.target.value})}></textarea>
                    <button className type = 'button' onClick={this.inputClick}>Отправить отзыв</button>
                </div>
            </div>
            </div>
        )
    }
}

export default CraftBreadRecipePage