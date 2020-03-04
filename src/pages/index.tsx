import * as React from 'react'
import { connect } from 'dva'
import styles from './index.less'

import { Button } from 'antd'

const App: React.FC<{}> = ({}) => {
  return (
    <div>
      <h1 className={styles.title}>index</h1>
      <Button>123</Button>
    </div>
  )
}

export default connect(({ global }: any) => ({
  username: global.username
}))(App)
