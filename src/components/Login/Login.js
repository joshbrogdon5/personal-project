import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Login.css';




class Login extends Component {

    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;

        let url = `${window.location.origin}/auth/callback`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri${url}&response_type=code`
    }

    render(){
        return(
            <div className="main-container">
                <div className='img'>
                    <div className='title'><h1 id="main-title">Swoley Brothers</h1></div>
                </div>
                <div className="button-container">
                    <Button bsStyle="primary" bsSize="small" onClick={this.login}>Login</Button>
                </div>
            </div>
        )
    }
}

export default Login;