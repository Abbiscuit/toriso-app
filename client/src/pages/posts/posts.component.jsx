import React, { Fragment } from 'react';

import PostsList from '../../components/posts-list/posts-list.component';

const Posts = () => {
  return (
    <Fragment>
      <h2 className="section-title">タイムライン</h2>
      <PostsList />
    </Fragment>
  );
};

export default Posts;
