import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUserData} from './../../ducks/reducer'
import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom';

class Accountpage extends Component {

componentDidMount(){
    axios.get('/api/user-data').then(res => {
        this.props.updateUserData(res.data)
    })
}

  render() {
      let {user} = this.props;
    return (
      <div>
        <Nav />
        <h1>Account Information</h1>
        {
            user.user_name? (
                <div>
                    <p>Account Holder: {user.user_name}</p>
                    <p>Account Email: {user.email}</p>
                    <img src={user.picture} alt="" />
                </div>
            ) : <p>Please Login <Link to='/'>Here</Link></p>
        }
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
