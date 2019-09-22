import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Fragment>
      <h2 className="section-title">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </h2>

      <section className="profile-section">
        <div className="profile-detail">
          <figure className="profile-image-figure">
            <a href="./profile.html">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80"
                alt=""
                className="profile-image profile-image-large"
              />
            </a>
          </figure>
          <p className="profile-detail-title">HIROSHI</p>

          <div className="profile-detail-options">
            <h3 className="skills">学んでいるスキル</h3>
            <ul className="list">
              <li className="list-item">React</li>
              <li className="list-item">JavaScript(ES6)</li>
              <li className="list-item">Ruby</li>
              <li className="list-item">Ruby on Rails</li>
            </ul>
            <h3 className="how-to">どうやって？</h3>
            <ul className="list">
              <li className="list-item">Udemy</li>
              <li className="list-item">Progate</li>
              <li className="list-item">絶対に挫折しないRails入門（教本）</li>
            </ul>
            <h3 className="about-me">わたしについて</h3>
            <p className="about-me-description">
              現在Udemyを中心に、JSやReactの動画講座にて学習をしています。
              今後はRailsチュートリアルをやってみようと思います！
            </p>

            <div className="github-list">
              <p className="github-title">GitHub</p>

              <div className="github-item">
                <p className="github-item-title">Deisgn Original Chat App</p>
                <span className="github-item-description">
                  Original Design Template for Chat App
                </span>
              </div>

              <div className="github-item">
                <p className="github-item-title">Pomodoro timer apps</p>
                <span className="github-item-description">
                  Enhance your learning ability with this Pomodoro timer
                </span>
              </div>
            </div>

            <Link to="/edit-profile" className="button button-block">
              編集する
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
