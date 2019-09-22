import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import PostsForm from '../../components/posts-form/posts-form.component';

const PostsNew = () => {
  return (
    <Fragment>
      <h2 className="section-title">新規投稿</h2>

      <section className="post-feed">
        <PostsForm placeholder="こちらは本番ではタイムラインページから、新規投稿アイコンを押すことによって表示できる（TOGGLE）ようにする。" />
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
              <i className="fas fa-thumbs-up"></i>
              <span>3</span>
            </button>
            <button className="button button-icon">
              <i className="fas fa-thumbs-down"></i>
              <span>0</span>
            </button>
            <Link to="/posts-comment" className="button">
              コメント 10件
            </Link>
          </div>
        </div>
        <div className="post-detail">
          <figure className="post-image-figure">
            <img
              src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80"
              alt=""
              className="post-image"
            />
          </figure>
          <p className="post-detail-title">Reactを勉強しています！</p>
          <p className="post-detail-date">
            Posted by <span className="post-detail-author">HIROSHI</span> on
            2019/09/12
          </p>
          <div className="post-detail-options">
            <button className="button button-icon">
              <i className="fas fa-thumbs-up"></i>
              <span>3</span>
            </button>
            <button className="button button-icon">
              <i className="fas fa-thumbs-down"></i>
              <span>0</span>
            </button>
            <Link to="/" className="button">
              コメント 10件
            </Link>
          </div>
        </div>
        <div className="post-detail">
          <figure className="post-image-figure">
            <img
              src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80"
              alt=""
              className="post-image"
            />
          </figure>
          <p className="post-detail-title">Reactを勉強しています！</p>
          <p className="post-detail-date">
            Posted by <span className="post-detail-author">HIROSHI</span> on
            2019/09/12
          </p>
          <div className="post-detail-options">
            <button className="button button-icon">
              <i className="fas fa-thumbs-up"></i>
              <span>3</span>
            </button>
            <button className="button button-icon">
              <i className="fas fa-thumbs-down"></i>
              <span>0</span>
            </button>

            <Link to="/" className="button">
              コメント 10件
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PostsNew;
