import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import axios from 'axios'

class Communitypage extends Component {
    constructor(){
        super()

        this.state = {
            post_title: '',
            post_content: ''
        }
    }

    postTitle(val){
        this.setState({post_title: val})
    }

    postContent(val){
        this.setState({post_content: val})
    }

    createPost(){
        axios.post('/api/createpost', {title: this.state.post_title, content: this.state.post_content}).then(results => {
            console.log(results.data)
        })
    }

  render() {
    return (
      <div>
          <Nav />
        <h1>Community Page</h1>
        <input placeholder='title' onChange={(e) => this.postTitle(e.target.value)} type='text'/>
        <input placeholder='Put content here...' onChange={(e) => this.postContent(e.target.value)} type='text'/>
        <button onClick={() => this.createPost()}>Create Post</button>
      </div>
    )
  }
}


export default Communitypage;
