import React from "react";

export class Review extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usersLink: 'http://localhost:5001/Users/one/'+this.props.data.userId.toString(),
            userName: this.props.data.userName,
            rate: this.props.data.rate,
            review: this.props.data.review,
        }
    }
    render(){
        return(
            <div className="review">
                <h3>{this.state.userName ? this.state.userName : "Удаленный пользователь"}</h3>
                <h2>{this.state.rate}/5</h2>
                <h1>{this.state.review}</h1>
            </div>
        )
    }
}