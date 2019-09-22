import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        TORISO
      </Link>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/developers">
            <i className="fas fa-users"></i> デベロッパー
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/register">新規登録</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/login">ログイン</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
