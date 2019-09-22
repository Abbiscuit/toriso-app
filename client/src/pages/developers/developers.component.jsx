import React, { Fragment } from 'react';

import DevelopersList from '../../components/developers-list/developers-list.component';

const Developers = () => {
  return (
    <Fragment>
      <h2 className="section-title">デベロッパーズ一覧</h2>
      <DevelopersList />
    </Fragment>
  );
};

export default Developers;
