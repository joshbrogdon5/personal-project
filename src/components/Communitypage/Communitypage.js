import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import axios from 'axios'
import {importPosts} from '../../ducks/reducer';
import {connect} from 'react-redux';
import './Communitypage.css';

class Communitypage extends Component {
    constructor(){
        super()

        this.state = {
            post_title: '',
            post_content: ''
        }
    }

    componentDidMount(){
        axios.get('/api/getposts').then(results => {
            this.props.importPosts(results.data)
        })
    }

    postTitle(val){
        this.setState({post_title: val})
    }

    postContent(val){
        this.setState({post_content: val})
    }

    createPost(){
        axios.post('/api/createpost', {title: this.state.post_title, content: this.state.post_content}).then(results => {
            this.props.importPosts(results.data)
        })
    }

  render() {
      const imgStyle = {
          height: '70px',
          width: '70px',
          borderRadius: '50%'
      }
      let displayPosts = this.props.posts.map((e,i) => {
          return(
              <div className='postsMap' key={i}>
                <h5 className='postTitle'>{e.post_title}</h5>
                <img style={imgStyle} src={e.picture} />
                <h6>{e.user_name}</h6>
                <p>{e.post_content}</p>
              </div>
          )
      })
    return (
    <div className='displayPostsContainer'>
          <Nav />
      <div className='displayPosts'>
        <div className='createPost'>
            <h2>Join the Community!</h2>
            <input className='communityInput' placeholder='Post Title' onChange={(e) => this.postTitle(e.target.value)} type='text'/>
            <input className='communityInput' placeholder='Post content...' onChange={(e) => this.postContent(e.target.value)} type='text'/>
            <button className='createPostButton' onClick={() => this.createPost()}>Create Post</button>
        </div>
        {displayPosts}
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {importPosts})(Communitypage);
