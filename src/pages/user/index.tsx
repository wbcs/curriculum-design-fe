import React from 'react'
import styles from './index.less'
import { Menu, Layout } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu

class User extends React.Component {
  handleClick = e => {
    console.log('click ', e)
  }

  render() {
    return (
      <div>
        <Layout>
          <Layout.Sider>
            <Menu
              // onClick={this.handleClick}
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </Menu>
          </Layout.Sider>
          <Layout.Content>
            cao 123123123123123123123123123123123
            123123123123123123123123123123123 123123123123123123123123123123123
            123123123123123123123123123123123
          </Layout.Content>
        </Layout>
      </div>
    )
  }
}

export default User
