import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import {Link} from 'react-router-dom'
import './Storefront.css'

export default class Storefront extends Component {
  render() {
    return (
        <div className='store-container'>
                <Nav />
            <div className='inner-store-container'>
                <Link className='protein' to='/protein'>
                        <h2>Proteins</h2>
                </Link>  
                <Link className='preworkout' to='/preworkout'>
                        <h2>Pre-Workout</h2>
                </Link>  
                <Link className='multivitamins' to='/multivitamins'>
                    <h2>Multivitamins</h2>
                </Link>  
                <Link className='bcaa' to='/bcaa'>
                    <h2>BCAA's</h2>
                </Link>  
                <Link className='creatine' to='/creatine'>
                    <h2>Creatine</h2>
                </Link>  
                <Link className='accessories' to='/accessories'>
                    <h2>Accessories</h2>
                </Link>  
        </div>
      </div>
    )
  }
}
