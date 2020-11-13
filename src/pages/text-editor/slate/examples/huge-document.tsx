import React, { useState, useMemo, useCallback } from 'react';
import mockjs from 'mockjs';
import { Node, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const initialValue = mockjs.mock({
  code: 200,
  'data|100': [
    {
      type: 'heading',
      children: [{ text: '@title' }],
    },
    {
      children: [{ text: '@paragraph' }],
    },
  ],
  mesg: '[模拟]数据获取成功',
});

const HugeDocumentExample = () => {
  const [value, setValue] = useState<Node[]>(initialValue.data);
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderElement = useCallback(props => <Element {...props} />, []);

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Editable renderElement={renderElement} spellCheck autoFocus />
    </Slate>
  );
};

const Element: React.FC<any> = props => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'heading':
      return <h1 {...attributes}>{children}</h1>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default HugeDocumentExample;
