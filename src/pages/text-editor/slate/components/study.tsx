import React from 'react';
// 导入 Slate 编辑器的工厂函数
import { createEditor, Editor, Transforms, Text, Node } from 'slate';
// 导入 Slate 组件和 React 插件
import { Slate, Editable, withReact } from 'slate-react';

// 当设置 value 状态时，添加初始化值。
const initialValue = [
  {
    // 指定Element的类型
    type: 'paragraph',
    // 必须存在一个children
    children: [
      // 指定文本内容
      { text: '段落中的一行文本。' },
    ],
  },
];

const Study: React.FC<any> = props => {
  // 创建一个新的 Editor 对象。我们希望编辑器在渲染中保持稳定，所以我们使用 useMemo hook
  // 创建一个不会在渲染中变化的 Slate 编辑器对象
  const editor = React.useMemo(() => withReact(createEditor()), []);

  // 使用 value 创建一个状态
  const [value, setValue] = React.useState<any[]>(
    JSON.parse(localStorage.getItem('content') as any) || initialValue,
  );

  // 基于传递的 `props` 定义一个渲染函数。
  // 我们在这里使用 `useCallback` 在随后的渲染中记住这个函数。
  const renderElement = React.useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <Code {...props} />;
      default:
        return <Default {...props} />;
    }
  }, []);

  // 通过 `useCallback` 定义一个可以记忆的渲染叶子节点的函数。
  const renderLeaf = React.useCallback(props => {
    return <Leaf {...props} />;
  }, []);

  // 渲染一个 <Slate> 上下文 provider
  // provider 组件会跟踪你的 Slate 编辑器，
  // 它的插件，它的值，它的选区，和任何发生的其他变化。
  // 它必须被渲染在任何 <Editable> 组件上。
  // 不过它也可以通过使用 useSlate hook 为其它组件提供编辑器状态，
  // 比如工具栏，菜单等等
  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={value => {
          setValue(value);
          // 在 Local Storage 里保存内容
          const content = JSON.stringify(value);
          localStorage.setItem('content', content);
        }}
      >
        {/* 添加一个工具栏按钮来调用同一个方法。 */}
        <div>
          <button
            style={{ color: 'black' }}
            onMouseDown={event => {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
            }}
          >
            Code Block
          </button>
          <button
            style={{ color: 'black' }}
            onMouseDown={event => {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
            }}
          >
            Bold
          </button>
        </div>

        <hr />

        {/*
        这个 <Editable> 组件的行为就像是 contenteditable 。
        在你渲染它的任何地方都会为最近的编辑器上下文渲染一个可编辑的富文本文档。
        */}
        <Editable
          // 传递 `renderElement` 函数。
          renderElement={renderElement}
          // 传递渲染叶子节点函数。
          renderLeaf={renderLeaf}
          // 定义一个新的处理程序在控制台打印按下的键。
          onKeyDown={event => {
            console.log(event.key);

            if (event.key === '&') {
              // 阻止插入 `&` 字符的默认事件。
              event.preventDefault();

              // 执行insertText方法插入某些文本。
              editor.insertText('and');
            }

            if (event.ctrlKey && event.key === '`') {
              // 阻止插入 "`" 的默认行为。
              event.preventDefault();

              // // 确定当前选中的块是否为任意的代码块。
              // const [match] = Editor.nodes(editor, {
              //   match: n => n.type === 'code',
              // });

              // // 否则，把当前选择的 blocks 的类型设为 "code"。
              // Transforms.setNodes(
              //   editor,
              //   { type: match ? 'paragraph' : 'code' },
              //   { match: n => Editor.isBlock(editor, n) },
              // );

              // 使用我们新编写的命令来替代 `onKeyDown` 中的逻辑
              CustomEditor.toggleCodeBlock(editor);
            }

            if (event.ctrlKey && event.key === 'b') {
              event.preventDefault();

              // Transforms.setNodes(
              //   editor,
              //   { bold: true },
              //   // 应用到文本节点上，
              //   // 如果所选内容仅仅是全部文本的一部分，则拆分它们。
              //   { match: n => Text.isText(n), split: true },
              // );

              // 使用我们新编写的命令来替代 `onKeyDown` 中的逻辑
              CustomEditor.toggleBoldMark(editor);
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default Study;

// 为 code 节点定义一个 React 组件渲染器。
const Code: React.FC<any> = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const Default: React.FC<any> = props => {
  return <p {...props.attributes}>{props.children}</p>;
};

// 定义一个 React 组件来加粗渲染叶子节点。
const Leaf: React.FC<any> = props => {
  return (
    <span {...props.attributes} style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}>
      {props.children}
    </span>
  );
};

// 定义一个我们自己的帮助函数。
const CustomEditor = {
  isBoldMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code',
    });

    return !!match;
  },

  toggleBoldMark(editor: Editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true },
    );
  },

  toggleCodeBlock(editor: Editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(editor, n) },
    );
  },
};

// 从Slate导入 `Node` 帮助函数接口
// 定义一个参数为 `value` 返回值是纯文本的序列化函数
const serialize = (value: any[]) => value.map(n => Node.string(n)).join('\n');
// 定义一个参数是字符串返回值是 `value` 的反序列化函数
const deserialize = (string: string) =>
  string.split('\n').map(line => ({ children: [{ text: line }] }));
