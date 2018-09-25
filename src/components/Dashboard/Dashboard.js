import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {storeProducts, activeCart, storeCartData, storeProteins, storePreworkouts, storeBcaas, storeMultivitamins, storeCreatine, storeAccessories} from './../../ducks/reducer';
import './Dashboard.css';




class Dashboard extends Component {

    componentDidMount(){
        axios.get('/api/products').then(results => {
            this.props.storeProducts(results.data.products)
            this.props.activeCart(results.data.cart)
        })
        axios.get('/api/proteins').then(results => {
            this.props.storeProteins(results.data)
        })
        axios.get('/api/preworkouts').then(results => {
            this.props.storePreworkouts(results.data)
        })
        axios.get('/api/bcaas').then(results => {
            this.props.storeBcaas(results.data)
        })
        axios.get('/api/multivitamins').then(results => {
            this.props.storeMultivitamins(results.data)
        })
        axios.get('/api/creatine').then(results => {
            this.props.storeCreatine(results.data)
        })
        axios.get('/api/accessories').then(results => {
            this.props.storeAccessories(results.data)
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


export default connect(null, {storeProducts, storeCartData, activeCart, storeProteins, storePreworkouts, storeBcaas, storeMultivitamins, storeCreatine, storeAccessories})(Dashboard);