import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUserData} from './../../ducks/reducer'
import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom';
import './Accountpage.css';

class Accountpage extends Component {

componentDidMount(){
    axios.get('/api/user-data').then(res => {
        this.props.updateUserData(res.data)
    })
}

  render() {
      let {user} = this.props;

    const mainStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
    const imgStyle = {
        width: '300px',
        height: '300px',
        boxShadow: '3px 5px',
        marginBottom: '10px'
    }

    return (
      <div>
        <Nav />
        <div style={mainStyle} className='accountpage-main'>
            <div className='account-content-container'>
                <h2>Account Information</h2>
                {
                    user.user_name? (
                        <div>
                            <img style={imgStyle} src={user.picture} alt="" />
                            <h6>Account Holder: {user.user_name}</h6>
                            <h6>Account Email: {user.email}</h6>
                        </div>
                    ) : <p>Please Login <Link to='/'>Here</Link></p>
                }
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {updateUserData})(Accountpage);
