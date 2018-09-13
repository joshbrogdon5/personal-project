import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {storeProducts, activeCart, storeCartData, storeProteins} from './../../ducks/reducer';
import './Dashboard.css';




class Dashboard extends Component {

    componentDidMount(){
        axios.get('/api/products').then(results => {
            this.props.storeProducts(results.data.products)
            this.props.activeCart(results.data.cart)
        })
        axios.get('/api/proteins').then(results => {
            this.props.storeProteins(results.data.proteins)
        })
    }

    render(){
        const buttonFinger = {
            cursor: 'pointer'
        }
        return(
            <div className='main-container-dashboard'>
                <div className='buttons-container'>
                    <div className='storebutton-maincontainer'>
                        <div className='storebutton-container'>
                            <Link to='/storefront'><button style={buttonFinger} className='dashboard-buttons'>Store</button></Link>
                        </div>
                    </div>
                    <div className='exercisebutton-maincontainer'>
                        <div className='exercisebutton-container'>
                            <Link to='/storefront'><button style={buttonFinger} className='dashboard-buttons'>Exercise</button></Link>
                        </div>
                    </div>
                    <div className='communitybutton-maincontainer'>
                        <div className='communitybutton-container'>
                            <Link to='/community'><button style={buttonFinger} className='dashboard-buttons'>Community</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, {storeProducts, storeCartData, activeCart, storeProteins})(Dashboard);