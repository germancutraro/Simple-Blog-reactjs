import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    author: "",
    subject: "",
    content: "",
    result: ""
  };

  createPost = e => {
    e.preventDefault();

    this.setState(
      {
        title: this.refs.refTitle.value,
        author: this.refs.refAuthor.value,
        subject: this.refs.refSubject.value,
        content: this.refs.refContent.value
      },
      () => {
        axios.post("https://simple-blog-4d17b.firebaseio.com/posts.json", this.state )
          .then(({ data }) =>
            this.setState({ result: "The post create successfully!" })
          )
          .catch(err => this.setState({ result: "Error!" }));
      }
    );
  };
  render() {
    return (
      <div className="New-Post-Wrapper">
        <h1 className="New-Post-Title">New Post</h1>
        <form onSubmit={this.createPost} className="New-Post-Form">
          <input type="text" placeholder="Title" ref="refTitle"  required minLength="3"/>
          <input type="text" placeholder="Author" ref="refAuthor"  required minLength="3"/>
          <input type="text" placeholder="Subject" ref="refSubject" required minLength="3"/>
          <textarea placeholder="Content..." ref="refContent" required minLength="20"  
            value="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum aliquam tincidunt. Quisque et sem eu sem bibendum varius in consectetur purus. Cras eu commodo dolor. Quisque rutrum a ipsum non dapibus. Vestibulum vel faucibus odio. Duis blandit a nulla quis aliquam. Maecenas at orci et est laoreet dictum. Donec auctor sollicitudin leo, quis pellentesque lorem consequat nec.

            Sed mi neque, rhoncus sit amet maximus vitae, ultricies eget est. Vestibulum magna dolor, tristique non nunc vitae, auctor euismod leo. Fusce nec velit at neque maximus luctus. Aliquam vestibulum pharetra purus quis luctus. Quisque dui nibh, lacinia in maximus sed, ornare at ex. Nulla facilisi. Aliquam porttitor, libero et tempus blandit, turpis urna scelerisque augue, rhoncus fermentum diam lectus eu nunc. Duis vestibulum nisi ac est rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ex tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            
            Sed convallis mollis sem at consequat. Donec quis gravida tortor. Vestibulum id pretium quam, non malesuada lectus. Vestibulum consectetur ultricies odio. Maecenas facilisis magna ut ipsum dapibus, sed elementum odio ullamcorper. Curabitur non laoreet augue. Mauris mattis, purus sed mollis volutpat, nulla dolor tristique mi, at bibendum ante elit id ex. Integer pellentesque, justo eget ultricies semper, risus augue sagittis ex, ac semper nisl nibh in dui.
            
            Sed eget elit orci. Nam venenatis consectetur leo eget porta. Proin eu vestibulum nulla. Cras condimentum velit vitae ante luctus, vitae maximus leo convallis. Ut commodo tincidunt condimentum. Mauris a erat eros. Curabitur aliquam pellentesque tempus. Proin laoreet eget lectus tempor ullamcorper. Aliquam quam ipsum, imperdiet eget maximus non, mollis non quam. Nunc odio ipsum, feugiat sit amet vulputate ac, fermentum eu orci. Morbi sollicitudin est a lacinia imperdiet. Fusce vitae ullamcorper sapien, vel vulputate lorem. Curabitur tincidunt tempor pulvinar.
            "
          />
          <input type="submit" value="Publish" />
        </form>
        <p>{this.state.result}</p>
        <p>
          {this.state.result &&
            this.state.title && (
              <Link to={`/post/${this.state.title}`}>Go to the post</Link>
            )}
        </p>
      </div>
    );
  }
}

export default NewPost;
