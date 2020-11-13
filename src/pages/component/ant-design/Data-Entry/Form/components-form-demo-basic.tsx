import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { FormProps } from 'antd/es/form';

const formLayout = {
  labelCol: { span: 0x04 },
  wrapperCol: { span: 0x06 },
};

const tailLayout = {
  wrapperCol: { offset: 0x04, span: 0x06 },
};

const Demo = () => {
  const onFinish: FormProps['onFinish'] = values => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps['onFinishFailed'] = errors => {
    console.log('Failed:', errors);
  };

  return (
    <Form
      {...formLayout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
