import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {removeFromCart} from '../../ducks/reducer';
import {connect} from 'react-redux';



class Cart extends Component {
    render(){
    let shoppingCartDisplay = this.props.shoppingCart.map((e,i) => {
        return(
            <div key={i}>
                <img src={e.image} alt="" />
                <div>
                    <h2>{e.title}</h2>
                    <h2>{`$${e.price}.00`}</h2>
                    <div>
                        <button onClick={() => this.props.removeFromCart(e)}>Remove Item</button>
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

export default connect(mapStateToProps, {removeFromCart})(Cart);