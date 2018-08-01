import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {storeProducts, activeCart} from './../../ducks/reducer';



class Dashboard extends Component {

    componentDidMount(){
        axios.get('/api/products').then(results => {
            this.props.storeProducts(results.data.products)
            this.props.activeCart(results.data.cart)
        })
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


export default connect(null, {storeProducts, activeCart})(Dashboard);