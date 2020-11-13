import React from 'react';
import { Card } from 'antd';
import styles from './index.less';
import Basic from './components-form-demo-basic';
import ControlHooks from './components-form-demo-control-hooks';
import DynamicFormItem from './components-form-demo-dynamic-form-item';

export default () => {
  return (
    <Card>
      <h2>基本使用</h2>
      <h3>基本的表单数据域控制展示，包含布局、初始化、验证、提交。</h3>
      <Basic />

      <h2>表单方法调用</h2>
      <h3>通过 Form.useForm 对表单数据域进行交互。</h3>
      <ControlHooks />

      <h2>动态增减表单项</h2>
      <h3>动态增加、减少表单项。add 方法参数可用于设置初始值。</h3>
      <DynamicFormItem />
    </Card>
  );
};
