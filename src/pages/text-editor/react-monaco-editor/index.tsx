import React from 'react';
import { Space, Badge } from 'antd';
import CodeEditor from './components/CodeEditor';
import DiffEditor from './components/DiffEditor';

const Demo = () => {
  return (
    <Space direction="vertical" size="large">
      <Badge.Ribbon text="CodeEditor" style={{ zIndex: 10 }}>
        <CodeEditor />
      </Badge.Ribbon>
      <Badge.Ribbon text="DiffEditor" style={{ zIndex: 10 }}>
        <DiffEditor />
      </Badge.Ribbon>
    </Space>
  );
};

export default Demo;
