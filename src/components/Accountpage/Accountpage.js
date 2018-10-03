import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUserData, storeUserPosts} from './../../ducks/reducer'
import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom';
import './Accountpage.css';

class Accountpage extends Component {

componentDidMount(){
    axios.get('/api/user-data').then(res => {
        this.props.updateUserData(res.data)
    })
    axios.get('/api/getUserPosts').then(results => {
        this.props.storeUserPosts(results.data)
    })
}

  render() {
      let {user, userPosts} = this.props;
      let displayUserPosts = userPosts.map((e,i) => {
          return(
              <div className='mapUserPosts' key={i}>
                    <h5>{e.post_title}</h5>
                    <p>{e.post_content}</p>  
              </div>
          )
      })

    const mainStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        alignContent: 'center',
    }
    const imgStyle = {
        width: '100px',
        height: '100px',
        marginBottom: '10px',
        marginTop: '10px',
        borderRadius: '50%'
    }

    return (
      <div>
        <Nav />
        <div style={mainStyle} className='accountpage-main'>
            <div className='account-content-container'>
                <h2 className='accountHeader' >My Account</h2>
                {
                    user.user_name? (
                        <div>
                            <img style={imgStyle} src={user.picture} alt="" />
                            <h6>Name: {user.user_name}</h6>
                            <h6>Email: {user.email}</h6>
                            {userPosts[0] ? (
                                <div className='displayUserPosts'>
                                    <h3>Posts:</h3>
                                    {displayUserPosts}
                                </div>                       
                            ): <p>No Posts yet!</p>}

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
        user: state.user,
        userPosts: state.userPosts
    }
}


export default connect(mapStateToProps, {updateUserData, storeUserPosts})(Accountpage);
