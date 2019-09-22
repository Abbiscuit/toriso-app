import React from 'react';

const DevelopersList = () => {
  return (
    <section className="devs-section">
      <a href="/profile.html" className="devs-detail">
        <figure className="devs-image-figure">
          <img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80"
            alt=""
            className="devs-image"
          />
        </figure>
        <div className="devs-name">
          <p className="devs-detail-title">あびたろう</p>
        </div>
      </a>
      <a href="/" className="devs-detail">
        <figure className="devs-image-figure">
          <img
            src="https://images.unsplash.com/photo-1529026146391-99c445f79401?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="devs-image"
          />
        </figure>
        <div className="devs-name">
          <p className="devs-detail-title">レイシー君</p>
        </div>
      </a>
    </section>
  );
};

export default DevelopersList;
