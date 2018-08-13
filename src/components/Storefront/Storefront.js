import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import axios from 'axios';
import './Storefront.css';


class Storefront extends Component {
    constructor(){
        super()
            this.state = {
                quantity: ''
            }
        this.updateQuantity=this.updateQuantity.bind(this);
    }


    addToCart(e){
        axios.post('/api/add-to-cart', {id: e.id, quantity: this.state.quantity}).then(results => {
            console.log(results)
            this.setState({quantity: ''})
        })
    }

    updateQuantity(val){
        this.setState({quantity: val})
    }

    render(){
        let productsDisplay = this.props.products.map((element,i) => {
            return(
                <div key={i}>
                    <h2>{element.title}</h2>
                    <img src={element.image} alt="" />
                    <h3>{element.description}</h3>
                    <h3>{`$${element.price}.00`}</h3>
                    <input placeholder="quantity" value={this.state.quantity} onChange={e => this.updateQuantity(e.target.value, element)} type="text"/>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.addToCart(element)}>Add to Cart</button>
                    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                        Item successfully added to your cart!
                        </div>
                    </div>
                    </div>
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