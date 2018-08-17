import React, {Component} from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import './Nav.css'
import dumbell from './../../images/dumbellicon.png'



class Nav extends Component {

    logout(){
        axios.get('api/logout').then(res => {
            this.props.history.push('/')
        })
    }
    render(){

        const imgStyle = {
            width: '50px',
            height: '50px',
        }

        return(
                <nav className='nav'>
                    <div className='nav-title-container'>
                        <img style={imgStyle} src={dumbell} alt='dumbell'/>
                        <h2 className='nav-title'>Swoley Bros</h2>
                    </div>
                    <div className='nav-buttons-container'>
                        <Link to='/storefront'><button className='nav-buttons' >Store</button></Link>
                        <Link to='/storefront'><button className='nav-buttons' >Exercise</button></Link>
                        <Link to='/storefront'><button className='nav-buttons' >Community</button></Link>
                        <Link  to='/cart'><button className='nav-buttons' >Cart</button></Link>
                        <Link  to='/accountpage'><button className='nav-buttons' >Account</button></Link>
                        <button className='nav-buttons' onClick={() => this.logout()}>Logout</button>
                    </div>
                </nav>
        )
    }
}


export default withRouter(Nav);