import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import {Link} from 'react-router-dom'

export default class Storefront extends Component {
  render() {
    return (
      <div>
          <Nav />
          <Link to='/protein'><button>Proteins</button></Link>  
          <Link to='/preworkout'><button>Pre-Workout</button></Link>  
          <Link to='/multivitamins'><button>Multivitamins</button></Link>  
          <Link to='/bcaa'><button>BCAA's</button></Link>  
          <Link to='/creatine'><button>Creatine</button></Link>  
          <Link to='/accessories'><button>Accessories</button></Link>  
      </div>
    )
  }
}
