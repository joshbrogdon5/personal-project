import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Login.css';




class Login extends Component {

    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;

        let url = `${window.location.origin}/auth/callback`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    render(){

        const contentContainerStyle = {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center'
        }
        const titleStyle = {
            fontSize: '5rem'
        }

        return(
            <div className="main-container">
                <div className='content-container' style={contentContainerStyle}>
                    <div className='title'>
                        <h1 id="main-title" style={titleStyle}>Swoley Bros</h1>
                    </div>
                    <div className="button-container">
                        <button className='login-button' onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;