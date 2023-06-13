import React from "react";

export class Review extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usersLink: 'http://localhost:5001/Users/one/'+this.props.data.userId.toString(),
            user: {},
            rate: this.props.data.rate,
            review: this.props.data.review,
        }
        this.TakeProduct = this.TakeProduct.bind(this)

        this.TakeProduct(this)
    }
    TakeProduct = (that) => {
        fetch(that.state.usersLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({user: jsonStr});})
        .catch(error => console.error(error));
    }
    render(){
        return(
            <div className="review">
                <h3>{this.state.user.name ? this.state.user.name : "Удаленный пользователь"}</h3>
                <h2>{this.state.rate}/5</h2>
                <h1>{this.state.review}</h1>
            </div>
        )
    }
}