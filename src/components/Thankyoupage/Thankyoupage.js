import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import checkmark from './../../images/checkmark.png';
import './Thankyoupage.css';


export default class Thankyou extends Component {
  render() {
      const mainStyle = {
          backgroundColor: '#343434',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center'
      }
      const contentContainerStyle = {
          backgroundColor: '#dfdfdf',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '50%',
          height: '60vh',
          margin: 'auto',
          borderRadius: '5px',
          boxShadow: '5px 8px'
      }
      const thankyouContainerStyle = {
          marginBottom: '50px',
          marginTop: '15px',
          textAlign: 'center'
      }
      const buttonContainerStyle = {
          alignItems: 'center',
          width: '100%'
      }
      const linkStyle = {
          width: '20%'
      }
      const buttonStyle = {
          width: '20%',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: 'grey',
          cursor: 'pointer'
      }
      const imgContainerStyle = {
          marginTop: '5%',
          marginBottom: '5%',
          width: '100%',
          textAlign: 'center'        
      }
      const imgStyle = {
          width: '8vw'
      }
    return (
      <div className="main" style={mainStyle}>
        <div className='content-conatiner' style={contentContainerStyle}>
            <div className='img-container' style={imgContainerStyle}>
                <img style={imgStyle} src={checkmark} alt='checkmark'/>
            </div>
            <div className='thankyou-container' style={thankyouContainerStyle}>
                <h1>Thank You!</h1>
                <h3>We hope you enjoy your purchase</h3>
            </div>
            <div className='button-container' style={buttonContainerStyle}>
                <Link to='/dashboard' style={linkStyle}><button className='ok-button'style={buttonStyle}>Ok</button></Link>
            </div>
        </div>
      </div>
    )
  }
}
