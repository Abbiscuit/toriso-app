import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2 className="section-title">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </h2>

      <section className="form-section">
        <h3 className="form-title">新規登録</h3>
        <div className="form-detail">
          <form>
            <input type="text" name="name" id="name" placeholder="お名前" />

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
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="パスワード確認"
            />
            <input
              type="submit"
              value="登録する"
              className="button button-block"
            />
          </form>
          <div className="form-detail-options">
            <Link to="/login" className="has-account">
              すでにアカウントをお持ちの方はこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
