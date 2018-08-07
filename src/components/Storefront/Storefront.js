import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import axios from 'axios';


class Storefront extends Component {


    addToCart(e){
        axios.post('/api/add-to-cart', {id: e.id}).then(results => {
            console.log(results)
        })
    }

    updateQuantity(e, element){
        axios.put('/api/quantity', {quantity: e, productid: element.id}).then(results => {
            console.log(results);
        })//SHOULD I PUT THIS IN CART? Because its doing some wierd stuff.
    }

    render(){
        let productsDisplay = this.props.products.map((element,i) => {
            return(
                <div key={i}>
                    <h2>{element.title}</h2>
                    <img src={element.image} alt="" />
                    <h2>{element.description}</h2>
                    <h3>{`$${element.price}.00`}</h3>
                    <input placeholder="quantity" onChange={e => this.updateQuantity(e.target.value, element)} type='text'/>
                    <button onClick={() => this.addToCart(element)}>Add to Cart</button>
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

export default connect(mapStateToProps)(Storefront);