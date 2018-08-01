import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {addToCart} from './../../ducks/reducer';


class Storefront extends Component {



    render(){
        let productsDisplay = this.props.products.map((e,i) => {
            return(
                <div key={i}>
                    <h2>{e.title}</h2>
                    <img src={e.image} alt="" />
                    <h2>{e.description}</h2>
                    <h3>{`$${e.price}.00`}</h3>
                    <button onClick={() => this.props.addToCart(e)}>Add to Cart</button>
                </div>
            )
        })
        return(
            <div>
                <Nav />
                {productsDisplay}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, {addToCart})(Storefront);