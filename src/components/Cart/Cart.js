import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {removeFromCart, storeCartData} from '../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';



class Cart extends Component {

    componentDidMount(){
        axios.get('/api/display-all').then(results => {
            this.props.storeCartData(results.data)
        })
    }

    deleteFromCart(id){
        axios.delete(`/api/product/${id}`).then(results => {
            this.props.storeCartData(results.data)
        })
    }

    render(){
    let shoppingCartDisplay = this.props.shoppingCart.map((e,i) => {
        return(
            <div key={i}>
                <img src={e.image} alt="" />
                <div>
                    <h2>{e.title}</h2>
                    <h2>{`$${e.price}.00`}</h2>
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
                shoppingCartDisplay
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