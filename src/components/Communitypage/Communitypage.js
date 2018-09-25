import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import axios from 'axios'
import {importPosts} from '../../ducks/reducer';
import {connect} from 'react-redux';

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
          height: '80px',
          width: '80px'
      }
      let displayPosts = this.props.posts.map((e,i) => {
          return(
              <div key={i}>
                <img style={imgStyle} src={e.picture} />
                <h6>{e.user_name}</h6>
                <h4>{e.post_title}</h4>
                <p>{e.post_content}</p>
              </div>
          )
      })
    return (
      <div>
          <Nav />
        <h1>Community Page</h1>
        <input placeholder='title' onChange={(e) => this.postTitle(e.target.value)} type='text'/>
        <input placeholder='Put content here...' onChange={(e) => this.postContent(e.target.value)} type='text'/>
        <button onClick={() => this.createPost()}>Create Post</button>
        {displayPosts}
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
