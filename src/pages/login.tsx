import React, { useRef, useState } from 'react'
import { FormInstance } from 'rc-field-form'
import { Form, Input, Button, Radio, InputNumber } from 'antd'
import { fetchSignUp, fetchLogin } from '@/api'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const renderStudentItems = () => (
  <React.Fragment>
    <Form.Item
      label="学号"
      name="id"
      rules={[{ required: true, message: 'Please input your id!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="班级"
      name="classNumber"
      rules={[{ required: true, message: 'Please input your classNumber!' }]}
    >
      <Input />
    </Form.Item>
  </React.Fragment>
)
const renderTeacherItems = () => (
  <React.Fragment>
    <Form.Item
      label="电话"
      name="phone"
      rules={[{ required: true, message: 'Please input your phone!' }]}
    >
      <Input />
    </Form.Item>
  </React.Fragment>
)

const Login = () => {
  const formRef = useRef<FormInstance>()
  const onFinish = (values: object) => {
    fetchLogin(values).then(res => {
      console.log(res)
    })
    console.log('Success:', values)
    // fetchSignUp(values).then(res => {
    //   console.log(res)
    // })
  }
  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      className="form"
      name="basic"
      ref={formRef}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="学号"
        name="id"
        rules={[{ required: true, message: 'Please input your id!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="身份"
        name="identity"
        rules={[{ required: true, message: 'Please choice your identity!' }]}
      >
        <Radio.Group>
          <Radio value={true}>学生</Radio>
          <Radio value={false}>老师</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <style jsx global>
        {`
          .form {
            width: 70%;
            min-width: 600px;
            margin: 0 auto;
          }
        `}
      </style>
    </Form>
  )
}

const SingUp = () => {
  const formRef = useRef()
  const [identity, setIdentity] = useState()

  const onFinish = (values: object) => {
    console.log('Success:', values)
    fetchSignUp(values).then(res => {
      console.log(res)
    })
  }

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      className="form"
      name="basic"
      ref={formRef}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="身份"
        name="identity"
        rules={[{ required: true, message: 'Please choice your identity!' }]}
        shouldUpdate={(prevValues, curValues) => {
          setIdentity(curValues.identity)
          return false
        }}
      >
        <Radio.Group>
          <Radio value={true}>学生</Radio>
          <Radio value={false}>老师</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="姓名"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="年龄"
        name="age"
        rules={[{ required: true, message: 'Please input your age!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="性别"
        name="sex"
        rules={[{ required: true, message: 'Please input your sex!' }]}
      >
        <Radio.Group>
          <Radio value={true}>男</Radio>
          <Radio value={false}>女</Radio>
        </Radio.Group>
      </Form.Item>

      {identity === true
        ? renderStudentItems()
        : identity === false
        ? renderTeacherItems()
        : null}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <style jsx global>
        {`
          .form {
            width: 70%;
            min-width: 600px;
            margin: 0 auto;
          }
        `}
      </style>
    </Form>
  )
}

export default ({ location }) => {
  const isLogin = /^\/login(\/)?$/.test(location.pathname)
  return isLogin ? <Login /> : <SingUp />
}
