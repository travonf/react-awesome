import React from 'react';
import { Badge } from 'antd';
import { UnControlled, Controlled } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css'; // 主题风格
import 'codemirror/mode/javascript/javascript'; // 代码模式

const initialValue = ` // react-codemirror2
function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}`;

const Editor = () => {
  const [value, setValue] = React.useState(initialValue);

  const options = {
    node: 'javascript',
    theme: 'material-darker',
    lineNumbers: true,
  };

  return (
    <div id="react-codemirror2-wrapper">
      <Badge.Ribbon text="UnControlled">
        <UnControlled options={options} value={initialValue} onChange={console.log} />
      </Badge.Ribbon>
      <div style={{ height: 24 }} />
      <Badge.Ribbon text="Controlled">
        <Controlled
          options={options}
          value={value}
          onBeforeChange={(editor, data, value) => {
            console.log(editor, data, value);
            setValue(value);
          }}
          onChange={console.log}
        />
      </Badge.Ribbon>
    </div>
  );
};

export default Editor;
