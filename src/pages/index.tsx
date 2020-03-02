import React from 'react';
import { connect } from 'dva'
import styles from './index.less';

const App: React.FC<{}> = ({}) => {
  return (
    <div>
      <h1 className={styles.title}>index</h1>
    </div>
  );
}

export default connect(({ global }: any) => ({
  username: global.username
}))(App)
