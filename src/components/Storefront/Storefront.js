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
                    <div className='protein'>
                        <h2>Proteins</h2>
                    </div>
                </Link>  
                <Link className='preworkout' to='/preworkout'>
                    <div className='preworkout' >
                        <h2>Pre-Workout</h2>
                    </div>
                </Link>  
          <Link to='/multivitamins'><button>Multivitamins</button></Link>  
          <Link to='/bcaa'><button>BCAA's</button></Link>  
          <Link to='/creatine'><button>Creatine</button></Link>  
          <Link to='/accessories'><button>Accessories</button></Link>  
        </div>
      </div>
    )
  }
}
