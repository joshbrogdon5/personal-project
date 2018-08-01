import React, {Component} from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';



class Nav extends Component {

    logout(){
        axios.get('api/logout').then(res => {
            this.props.history.push('/')
        })
    }
    render(){
        return(
            <div>
                Nav
                <button onClick={() => this.logout()}>Logout</button>
                <Link to='/accountpage'><button>Account</button></Link>
                <Link to='/cart'><button>Cart</button></Link>
            </div>
        )
    }
}


export default withRouter(Nav);