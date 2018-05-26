import React, { Component } from "react";
import axios from "axios";
import './FullPost.css';

class FullPost extends Component {
  state = {
    title: '',
    content: '',
    author: '',
    subject: ''
    // found: false
  };
  componentDidMount() {
    let { postTitle } = this.props.match.params;
    axios.get("https://simple-blog-4d17b.firebaseio.com/posts.json")
      .then(({ data }) =>
          Object.values(data).find(({ title, content, author, subject }) => (
            title === postTitle 
              ? this.setState({ title, content, author, subject }) 
              : false
        )
      ))
      .catch(err => console.log(err));
  }
  render() {
    const { title, content, author, subject } = this.state;
    // if (!found) this.props.history.replace('/404');
    console.log('render')
    return (
      <div className="Full-Post-Wrapper">
        <h1 className="Full-Post-Title">{title}</h1>
        <small className="Full-Post-Author">
          {author} - {subject}
        </small>
        <div className="Full-Post-Content-Wrapper">
          <p className="Full-Post-Content">{content}</p>
        </div>
      </div>
    );
  }
}

export default FullPost;
