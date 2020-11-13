import React, { useState, useMemo, useCallback } from 'react';
import { Transforms, createEditor, Node } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { withHistory } from 'slate-history';

const ForcedLayoutExample = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  const editor = useMemo(() => withLayout(withHistory(withReact(createEditor()))), []);
  const renderElement = useCallback(props => <Element {...props} />, []);

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Editable renderElement={renderElement} placeholder="Enter a title..." spellCheck autoFocus />
    </Slate>
  );
};

const withLayout = (editor: ReactEditor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      if (editor.children.length < 1) {
        const title = { type: 'title', children: [{ text: 'Untitled' }] };
        /**
         * TODO: 掌握Transforms Api
         */
        Transforms.insertNodes(editor, title, { at: path.concat(0) });
      }

      if (editor.children.length < 2) {
        const paragraph = { type: 'paragraph', children: [{ text: '' }] };
        Transforms.insertNodes(editor, paragraph, { at: path.concat(1) });
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        const type = childPath[0] === 0 ? 'title' : 'paragraph';

        if (child.type !== type) {
          Transforms.setNodes(editor, { type }, { at: childPath });
        }
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

const Element: React.FC<any> = props => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'title':
      return <h2 {...attributes}>{children}</h2>;
    case 'paragraph':
      return <p {...attributes}>{children}</p>;
    default:
      return <div {...attributes}>{children}</div>;
  }
};

const initialValue = [
  {
    type: 'title',
    children: [
      {
        text: 'Enforce Your Layout!',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'This example shows how to enforce your layout with domain-specific constraints.',
      },
    ],
  },
];

export default ForcedLayoutExample;
