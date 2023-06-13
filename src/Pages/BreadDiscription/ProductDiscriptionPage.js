import React from 'react'
import Header from "../../components/Header"
import { useParams } from "react-router-dom";
import { Review } from '../../components/Review';
const ProductDiscriptionPage = (props) => {

    let { id } = useParams();
    console.log(`${id}`);
    return(
        <Description id={id}></Description>
    )
}
class Description extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product: {},
            productLink: 'http://localhost:5062/Bread/one/'+this.props.id.toString(),
            picture: "",
            pictureLink: 'http://localhost:5062/Pictures/'+this.props.id.toString(),
            commentInput: "",
            inputRate: '',
        }
        console.log(this.state.link)
        this.TakeProduct = this.TakeProduct.bind(this)
         this.TakePicture = this.TakePicture.bind(this)

        this.TakeProduct(this)
        this.TakePicture(this)
    }
    TakeProduct = (that) => {
        fetch(that.state.productLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({product: jsonStr});})
        .catch(error => console.error(error));
    }
    TakePicture =(that) => {
        fetch(that.state.pictureLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({picture: jsonStr.dataBase64});})
        .catch(error => console.error(error));
    }
    inputClick = (event) => {
        event.preventDefault();
        if ((localStorage.getItem("loggedIn"))&&(this.state.commentInput!=="")&&(this.state.inputRate!==""))
        {
            try {
                fetch('http://localhost:5062/BreadReview', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  review: this.state.commentInput,
                  rate: this.state.inputRate, 
                  breadId: this.props.id,
                  userId: localStorage.getItem("profileId"),
                })
            })
            } catch (error) 
            {
                console.error('Ошибка:', error);
            }
        }
        else if(this.state.commentInput==="")
        {
            alert("Нельзя оставить пустой комментарий")
        }
        else
        {
            alert("Чтобы оставить отзыв, нужно войти в аккаунт")
        }

    }
    render(){
        return(
            <div>
                <Header></Header>
                <div className='description'>
                    <div>
                        <img className='productPicture' src={this.state.picture}></img>
                        <h1>{this.state.product.name}</h1>
                        <label>{this.state.product.rate}/5</label>
                        <h3>{this.state.product.price} рублей</h3>
                    </div>
                    <div>
                        <h1>О продукте:</h1>
                        <label>{this.state.product.description}</label>
                    </div>
                    <div>
                        <h1>Мнение экспертов:</h1>
                        {this.state.product.breadReviews?.map((el) =>(<Review data={el}></Review>))}
                        <textarea className='comment' placeholder="Оставьте отзыв"
                            onChange={(e) => this.setState({commentInput: e.target.value})}></textarea>
                        <input placeholder="Ваша оценка от 1 до 5" onChange={(e) => this.setState({inputRate: e.target.value})}></input>
                        <button className type = 'button' onClick={this.inputClick}>Отправить отзыв</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDiscriptionPage