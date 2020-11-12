import React from 'react';
import { Space } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { none } from 'ramda';

const Demo: React.FC<any> = () => {
  const [value, setValue] = React.useState('');
  const [copied, setCopied] = React.useState(false);

  return (
    <Space direction="vertical" size="middle">
      <input
        type="text"
        placeholder="请输入"
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ color: 'black', padding: 4 }}
      />

      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <span
          style={{
            border: '1px solid orange',
            padding: 4,
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Copy to clipboard with span
        </span>
      </CopyToClipboard>

      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button
          style={{
            color: 'black',
            padding: 4,
            borderRadius: 4,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Copy to clipboard with button
        </button>
      </CopyToClipboard>

      {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
    </Space>
  );
};

export default Demo;
