import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';



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
            </div>
        )
    }
}


export default withRouter(Nav);