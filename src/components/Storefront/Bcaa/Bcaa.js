import React, {Component} from 'react';
import Nav from '../../Nav/Nav';
import {connect} from 'react-redux';
import axios from 'axios';
import './Bcaa.css';


class Bcaa extends Component {
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
        let bcaaDisplay = this.props.bcaas.map((element,i) => {
            return(
                <div className='mapDiv' key={i}>
                    <h3>{element.title}</h3>
                    <img style={imgStyle} src={element.image} alt="" />
                    <p>{element.description}</p>
                    <h4>{`$${element.price}.00`}</h4>
                    <form class="form-inline1">
                            <select class="custom-select my-sm-1 mr-sm-2" id="inlineFormCustomSelectPref1" onChange={e => this.updateQuantity(e.target.value, element)}>
                                <option value="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.addToCart(element)}>Add to Cart</button>
                        </form>
                </div>
            )
        })
        return(
            <div>
                <Nav />
                <div className='display'>
                    {bcaaDisplay}
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
        ...this.props, ...state,
    }
}

export default connect(mapStateToProps)(Bcaa);
