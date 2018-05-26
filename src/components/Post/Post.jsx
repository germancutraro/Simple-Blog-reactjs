import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = props => {
  const { author, content, subject, title } = props;
  return (
    <div onClick={ () => props.goToPost(title) } className="Post">
      <h1>{ title }</h1>
      <p>{ content.substring(0, 100) }...</p>
      <small>{ author } - { subject }</small>
    </div>
  );
};

Post.propTypes = {
  goToPost: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Post;