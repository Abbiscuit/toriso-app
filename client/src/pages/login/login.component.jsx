import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Fragment>
      <h2 className="section-title">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </h2>

      <section className="form-section">
        <h3 className="form-title">ログイン</h3>
        <div className="form-detail">
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Eメールアドレス"
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="パスワード"
            />

            <input
              type="submit"
              value="ログイン"
              className="button button-block"
            />
          </form>
          <div className="form-detail-options">
            <Link to="/register" className="has-account">
              アカウントをお持ちでない方はこちら
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
