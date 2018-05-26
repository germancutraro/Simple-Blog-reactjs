import React, { Component } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Post from "../Post/Post";

class Posts extends Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    const posts = [];
    axios
      .get("https://simple-blog-4d17b.firebaseio.com/posts.json")
      .then(({ data }) => {
        Object.values(data).map(post => posts.push(post));
        this.setState({ posts, loading: false });
      })
      .catch(err => console.log(err));
  }

  goToPost = title => this.props.history.push(`/post/${encodeURI(title)}`);

  render() {
    const posts = this.state.posts.map((post, i) => (
      <Post key={i} goToPost={this.goToPost} {...post} />
    ));
    if (this.state.posts.length === 0) {
      return <PulseLoader color={"#123abc"} loading={this.state.loading} />;
    }
    return <div className="Posts">{posts}</div>;
  }
}

export default Posts;
