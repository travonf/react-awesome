import React from 'react';
import { Card } from 'antd';
import MultipleDatePicker from './MultipleDatePicker';

const Demo = () => {
  const [value, onChange] = React.useState<string[]>([]);

  return (
    <Card>
      <h1>自定义渲染选择器下拉菜单</h1>
      <MultipleDatePicker value={value} onChange={onChange} />
    </Card>
  );
};

export default Demo;
