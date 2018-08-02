import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {storeProducts, activeCart, storeCartData} from './../../ducks/reducer';



class Dashboard extends Component {

    componentDidMount(){
        axios.get('/api/products').then(results => {
            this.props.storeProducts(results.data.products)
            this.props.activeCart(results.data.cart)
        })
        // axios.get('/api/display-all').then(results => {
        //     this.props.storeCartData(results.data)
        // })
    }

    render(){
        return(
            <div>
                Dashboard
                <Link to='/storefront'><button>Store</button></Link>
            </div>
        )
    }
}


export default connect(null, {storeProducts, storeCartData, activeCart})(Dashboard);