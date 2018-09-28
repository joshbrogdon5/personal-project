import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import {Link} from 'react-router-dom'
import './Storefront.css'
import axios from 'axios';
import {connect} from 'react-redux';
import {storeProducts, activeCart, storeCartData, storeProteins, storePreworkouts, storeBcaas, storeMultivitamins, storeCreatine, storeAccessories} from './../../ducks/reducer';

class Storefront extends Component {

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

  render() {
    return (
        <div className='store-container'>
                <Nav />
            <div className='inner-store-container'>
                <Link className='protein' to='/protein'>
                        <h2 className='category-title' >Proteins</h2>
                </Link>  
                <Link className='preworkout' to='/preworkout'>
                        <h2 className='category-title' >Pre-Workout</h2>
                </Link>  
                <Link className='multivitamins' to='/multivitamins'>
                    <h2 className='category-title' >Multivitamins</h2>
                </Link>  
                <Link className='bcaa' to='/bcaa'>
                    <h2 className='category-title' >BCAA's</h2>
                </Link>  
                <Link className='creatine' to='/creatine'>
                    <h2 className='category-title' >Creatine</h2>
                </Link>  
                <Link className='accessories' to='/accessories'>
                    <h2 className='category-title' >Accessories</h2>
                </Link>  
        </div>
      </div>
    )
  }
}

export default connect(null, {storeProducts, storeCartData, activeCart, storeProteins, storePreworkouts, storeBcaas, storeMultivitamins, storeCreatine, storeAccessories})(Storefront);
