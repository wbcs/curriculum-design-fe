import * as React from 'react'
import { connect } from 'dva'
import './index.less'

import { Button } from 'antd'

const App: React.FC<{}> = ({}) => {
  return (
    <div>
      <h1>我他妈的是主页</h1>
    </div>
  )
}

export default connect(({ global }: any) => ({
  username: global.username
}))(App)
