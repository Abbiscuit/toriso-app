import React from 'react';

import { Link } from 'react-router-dom';

const PostsList = () => {
  return (
    <section className="post-feed">
      <div className="post-detail">
        <figure className="post-image-figure">
          <Link to="/profile">
            <img
              src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80"
              alt=""
              className="post-image"
            />
          </Link>
        </figure>
        <p className="post-detail-title">Reactを勉強しています！</p>
        <p className="post-detail-date">
          Posted by <span className="post-detail-author">HIROSHI</span> on
          2019/09/12
        </p>
        <div className="post-detail-options">
          <button className="button button-icon">
            <i className="fas fa-thumbs-up"></i> <span>3</span>
          </button>
          <button className="button button-icon">
            <i className="fas fa-thumbs-down"></i> <span>0</span>
          </button>
          <Link to="/posts-comment" className="button">
            コメント 10件
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostsList;
