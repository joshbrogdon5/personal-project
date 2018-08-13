import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {removeFromCart, storeCartData} from '../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import stripe from './../../stripeKey';
import StripeCheckout from 'react-stripe-checkout';



class Cart extends Component {
    constructor(){
        super()

        this.state={
            quantity: ''
        }
    }

    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:3333/api/payment', { token, amount: 100 }).then(response => {alert('Gucci Gang')});
    }

    componentDidMount(){
        axios.get('/api/display-all').then(results => {
            console.log(results.data)
            this.props.storeCartData(results.data)
        })
    }

    deleteFromCart(id){
        axios.delete(`/api/product/${id}`).then(results => {
            this.props.storeCartData(results.data)
        })
    }

    updateQuantity(e){
        axios.put('/api/quantity', {id: e, quantity: this.state.quantity}).then(results =>{
            this.props.storeCartData(results.data);
        })
    }

    handleQuantity(val){
        this.setState({quantity: val})
    }

    render(){
    let shoppingCartDisplay = this.props.shoppingCart.map((e,i) => {
        return(
            <div key={i}>
                <img src={e.image} alt="" />
                <div>
                    <h2>{e.title}</h2>
                    <h2>{`$${e.price}.00`}</h2>
                    <h3>{e.quantity}</h3>
                    <input placeholder='edit quantity' onChange={e => this.handleQuantity(e.target.value)} type="text"/>
                    <button onClick={() => this.updateQuantity(e.id)}>Submit Changes</button>
                    <div>
                        <button onClick={() => this.deleteFromCart(e.id)}>Remove Item</button>
                    </div>
                </div>
            </div>
        )
    })
        return(
            <div>
                <Nav />
                {shoppingCartDisplay[0] ?
                <div>
                    {shoppingCartDisplay}
                    <StripeCheckout 
                    token={this.token}
                    stripeKey={stripe.pub_key}
                    amount={100}//link this to total once you have set it up
                    />
                </div>
                : <div>
                    <h1>Your cart is empty!</h1>
                </div>} 
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps, {removeFromCart, storeCartData})(Cart);