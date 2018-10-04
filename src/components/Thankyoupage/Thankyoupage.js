import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import checkmark from './../../images/checkmark.png';
import './Thankyoupage.css';


export default class Thankyou extends Component {
  render() {
      const mainStyle = {
          backgroundColor: '#e1e1e1',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center'
      }
      const contentContainerStyle = {
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '60%',
          height: '60vh',
          margin: 'auto',
          borderRadius: '4px',
          border: '1px solid #EBEBE0',
          boxShadow: '4px 5px 8px'
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
          width: '40%',
          border: '1px solid #e1e1e1',
          borderRadius: '3px',
          backgroundColor: '#33B1EF',
          color: '#fff',
          textShadow: 'rgba(0, 0, 0, 0.25) 0px -1px 0px',
          fontSize: '1.1rem'
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
        <div className='thankyou-content-container' style={contentContainerStyle}>
            <div className='img-container' style={imgContainerStyle}>
                <img className='checkmark' style={imgStyle} src={checkmark} alt='checkmark'/>
            </div>
            <div className='thankyou-container' style={thankyouContainerStyle}>
                <h1 className='thankyou-text'>Thank You!</h1>
                <h3 className='enjoypurchase'>We hope you enjoy your purchase</h3>
            </div>
            <div className='button-container' style={buttonContainerStyle}>
                <Link to='/dashboard' style={linkStyle}><button className='ok-button'style={buttonStyle}>Ok</button></Link>
            </div>
        </div>
      </div>
    )
  }
}
