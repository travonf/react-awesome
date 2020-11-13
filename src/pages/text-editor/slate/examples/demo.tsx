import React, { FC, useState, useMemo, useCallback } from 'react';
import { createEditor, Node, Editor, Element, Text, Transforms } from 'slate';
import { compose } from 'ramda';
import {
  withReact,
  ReactEditor,
  Slate,
  Editable,
  RenderElementProps,
  RenderLeafProps,
} from 'slate-react';
import { withHistory } from 'slate-history';

const withPlugins = compose<Editor, Editor, Editor>(withHistory, withReact);

export default () => {
  const editor = useMemo(() => withPlugins(createEditor()), []);
  const [value, setValue] = useState<Node[]>([]);
  const renderElement = useCallback(props => <El {...props} />, []);
  const renderLeaf = useCallback(props => <Lf {...props} />, []);

  return (
    <Slate editor={editor as ReactEditor} value={value} onChange={setValue}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
};

/**
 * 定义Element渲染
 * 通过element.type渲染不同的组件
 */
const El: FC<RenderElementProps> = ({ attributes, children, element }) => {
  switch (element.type) {
    default:
      return <p {...attributes}>{children}</p>;
  }
};

/**
 * 定义Leaf渲染
 * 通过leaf.attr渲染不同的样式
 */
const Lf: FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  return <span {...attributes}>{children}</span>;
};
