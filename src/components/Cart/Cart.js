import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {removeFromCart, storeCartData} from '../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import stripe from './../../stripeKey';
import StripeCheckout from 'react-stripe-checkout';
import {withRouter} from 'react-router';
import './Cart.css'


class Cart extends Component {
    constructor(){
        super()

        this.state={
            quantity: '',
            total: 0
        }
    }

    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('/api/payment', { token, amount: 100 })
        .then(axios.put('/api/clear-cart'));
        this.props.history.push('/thankyou')
    }//in the .then make an axios call to update total in database.

    componentDidMount(){
        axios.get('/api/display-all').then(results => {
            console.log(results.data)
            this.props.storeCartData(results.data)
            this.calculateTotal()
        }
        )
    }

    deleteFromCart(id){
        axios.delete(`/api/product/${id}`).then(results => {
            this.props.storeCartData(results.data)
            this.setState({total: 0})
            this.calculateTotal()
        })
    }

    updateQuantity(e){
        axios.put('/api/quantity', {id: e, quantity: this.state.quantity}).then(results =>{
            this.props.storeCartData(results.data);
            this.setState({total:0})
            this.calculateTotal()
        })
    }

    handleQuantity(val){
        this.setState({quantity: val})
    }

    calculateTotal(){
        let total = this.props.shoppingCart.map((e) => {
            
            var updateTotal = this.state.total + e.price * e.quantity;
            console.log('update', updateTotal)
            this.setState({total: updateTotal })
        })
    }

    render(){
        const imgStyle = {
            width: '120px',
            height: '170px',
            float: 'left',
            margin: '10px'
        }
        const inputStyle = {
            width: '100px'
        }
        const textPosition = {
            float: 'right',
            marginLeft: '10px'
        }
        const buttonPosition = {
            position: 'absolute',
            top: '0px',
            right: '0px'
        }
        let shoppingCartDisplay = this.props.shoppingCart.map((e,i) => {
        return(
            <div className='mapDivCart' key={i}>
                <div>
                    <img style={imgStyle} src={e.image} alt="" />
                    <div style={textPosition}>
                        <h3>{e.title}</h3>
                        <h4>{`$${e.price}.00`}</h4>
                        <h4>Quantity: {e.quantity}</h4>
                        <input style={inputStyle} placeholder='edit quantity' onChange={e => this.handleQuantity(e.target.value)} type="text"/>
                        <button className='cart-buttons' onClick={() => this.updateQuantity(e.id)}>Submit</button>
                        <div>
                            <button style={buttonPosition} type='button' class='close' aria-label='Close' onClick={() => this.deleteFromCart(e.id)}>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
        return(
            <div>
                <Nav />
                <div className='displayDivContainer'>
                    <div>
                        {shoppingCartDisplay[0] ?
                        <div className='displayDiv' >
                            {shoppingCartDisplay}
                            <div className='checkout'>
                                <h3>Total: ${this.state.total}</h3>
                                <StripeCheckout 
                                token={this.onToken}
                                stripeKey={stripe.pub_key}
                                amount={this.state.total*100}//link this to total once you have set it up
                                />
                            </div>
                        </div>
                        : <div>
                            <h1>Your cart is empty!</h1>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps, {removeFromCart, storeCartData})(withRouter(Cart));