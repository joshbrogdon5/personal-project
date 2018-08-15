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
        const imgStyle = {
            width: '160px',
            height: '250px'
        }
        const inputStyle = {
            width: '80px'
        }
        let productsDisplay = this.props.products.map((element,i) => {
            return(
                <div className='mapDiv' key={i}>
                    <h3>{element.title}</h3>
                    <img style={imgStyle} src={element.image} alt="" />
                    <p>{element.description}</p>
                    <h4>{`$${element.price}.00`}</h4>
                    <input style={inputStyle} placeholder="quantity" onChange={e => this.updateQuantity(e.target.value, element)} type="text"/>
                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.addToCart(element)}>Add to Cart</button>
                </div>
            )
        })
        return(
            <div>
                <Nav />
                <div className='display'>
                    {productsDisplay}
                    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content">
                                Item successfully added!
                            </div>
                        </div>
                    </div>
                </div>
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