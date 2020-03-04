import * as React from 'react'
import { Menu, Avatar, Layout } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  BookOutlined,
  HomeOutlined
} from '@ant-design/icons'
import { Link } from 'umi'

import './index.less'

class Header extends React.Component {
  render() {
    return (
      <Layout.Header className="header">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/">
              <HomeOutlined />
              主页
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/class">
              <BookOutlined />
              课程
            </Link>
          </Menu.Item>
        </Menu>
        <Link to="/user">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Link>
      </Layout.Header>
    )
  }
}

export default Header
