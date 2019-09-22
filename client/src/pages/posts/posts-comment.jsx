import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const PostsComment = () => {
  return (
    <Fragment>
      <h2 className="section-title">
        <Link to="/">
          {' '}
          <i className="fas fa-arrow-left"></i>
        </Link>
      </h2>

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
          <p className="post-detail-title">
            Reactを勉強しています！Progateの次に何を学んだら良いでしょうか？Reduxを学んでみる？それともバックエンドを学んでみる？
          </p>

          <p className="post-detail-date">
            Posted by <span className="post-detail-author">HIROSHI</span> on
            2019/09/12
          </p>
        </div>

        <form>
          <textarea
            type="text"
            name="about-me"
            id="about-me"
            placeholder="コメントを入力しよう。"
          ></textarea>

          <input type="submit" value="投稿" className="button button-block" />
        </form>

        <div className="post-detail">
          <figure className="post-image-figure">
            <img
              src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80"
              alt=""
              className="post-image"
            />
          </figure>
          <p className="post-detail-comments">
            僕はReduxを学びました！親コンポーネントから子コンポーネントへのデータの受け渡しは、Webアプリケーションの構造が複雑になるにつれて管理が難しくなります。
            Reduxを学べばPropsの受け渡しという概念が変わりますので、ぜひ学習することをオススメします！
          </p>
          <p className="post-detail-date">
            Posted by <span className="post-detail-author">YAAAAMAN</span> on
            2019/09/12
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default PostsComment;
