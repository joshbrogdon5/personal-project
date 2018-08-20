import React, {Component} from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import './Nav.css'
import dumbell from './../../images/dumbellicon.png'
import hamburger from './../../images/Hamburger_icon.svg.png'



class Nav extends Component {
    constructor(){
        super()
        
        this.state={
            showButtons: true
        }
    }

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
                <nav className='nav' id='myNav'>
                    <div className='nav-title-container'>
                        <Link to='/dashboard'><img style={imgStyle} src={dumbell} alt='dumbell'/></Link>
                        <h2 className='nav-title'>Swoley Bros</h2>
                    </div>
                    <div className='nav-buttons-container' id={this.state.showButtons ? 'expand' : null}>
                        <Link to='/storefront'><button className='nav-buttons' >Store</button></Link>
                        <Link to='/storefront'><button className='nav-buttons' >Exercise</button></Link>
                        <Link to='/storefront'><button className='nav-buttons' >Community</button></Link>
                        <Link  to='/cart'><button className='nav-buttons' >Cart</button></Link>
                        <Link  to='/accountpage'><button className='nav-buttons' >Account</button></Link>
                        <button className='nav-buttons' onClick={() => this.logout()}>Logout</button>
                    </div>
                        <a href="javascript:void(0);" className='icon' onClick={() => this.setState({showButtons: this.state.showButtons ? false : true})}>
                            <img style={imgStyle} src={hamburger} alt='' />
                        </a>
                </nav>
        )
    }
}


export default withRouter(Nav);