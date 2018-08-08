import React, {Component} from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import './Nav.css'



class Nav extends Component {

    logout(){
        axios.get('api/logout').then(res => {
            this.props.history.push('/')
        })
    }
    render(){
        const NavBar = {textDecoration: 'none', color: 'white', fontSize: '20px'}
        return(
                <nav className='nav nav-pills nav-justified navbar navbar-expand-md navbar-dark bg-dark' style={NavBar}>
                    <h2>Swoley Bros</h2>
                    <div className='nav-item nav justify-content-end'>
                        <Link className='nav-link' to='/storefront'><button type='button' className='btn btn-outline-light'>Store</button></Link>
                        <Link className='nav-link'to='/storefront'><button type='button' className='btn btn-outline-light'>Exercise</button></Link>
                        <Link className='nav-link'to='/storefront'><button type='button' className='btn btn-outline-light'>Community</button></Link>
                        <Link className='nav-link' to='/cart'><button type='button' className='btn btn-outline-light'>Cart</button></Link>
                        <Link className='nav-link' to='/accountpage'><button type='button' className='btn btn-outline-light'>Account</button></Link>
                        <button type='button' className='btn btn-link text-danger' onClick={() => this.logout()}>Logout</button>
                    </div>
                </nav>
        )
    }
}


export default withRouter(Nav);