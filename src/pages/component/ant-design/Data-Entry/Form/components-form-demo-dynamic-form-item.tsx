import React from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 0x18 },
    sm: { span: 0x04 },
  },
  wrapperCol: {
    xs: { span: 0x18 },
    sm: { span: 0x06 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 0x18, offset: 0x00 },
    sm: { span: 0x06, offset: 0x04 },
  },
};

const Demo = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form {...formItemLayoutWithOutLabel} name="dynamic_form_item" onFinish={onFinish}>
      <Form.List name="names">
        {(fields, { add, remove }) => (
          <div>
            {fields.map((field, index) => (
              <Form.Item
                {...(!index ? formItemLayout : formItemLayoutWithOutLabel)}
                key={field.key}
                label={!index ? 'Passengers' : ''}
                required={false}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="passenger name" style={{ width: '90%' }} />
                </Form.Item>
                {/* 删减操作 */}
                {fields.length > 1 && (
                  <MinusCircleOutlined
                    style={{
                      marginLeft: 8,
                      cursor: 'pointer',
                      fontSize: 24,
                      color: '#999',
                      transition: 'all 0.3s',
                      position: 'relative',
                      top: 4,
                    }}
                    onClick={() => remove(field.name)}
                  />
                )}
              </Form.Item>
            ))}
            {/* 增加操作 */}
            <Form.Item>
              <Button type="dashed" block style={{ width: '90%' }} onClick={() => add()}>
                <PlusOutlined /> Add Field
              </Button>
            </Form.Item>
          </div>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
