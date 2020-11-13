import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const formLayout = {
  labelCol: { span: 0x04 },
  wrapperCol: { span: 0x06 },
};

const tailLayout = {
  wrapperCol: { offset: 0x04, span: 0x06 },
};

const Demo = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: any) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        return;
      default:
        return;
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  const shouldUpdate = (prev: any, curr: any) => prev.gender !== curr.gender;

  return (
    <Form {...formLayout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item label="Note" name="note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
        <Select allowClear onChange={onGenderChange}>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
          <Select.Option value="other">other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item noStyle shouldUpdate={shouldUpdate}>
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' && (
            <Form.Item label="Customize Gender" name="customizeGender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          )
        }
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
          Submit
        </Button>
        <Button type="default" htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
