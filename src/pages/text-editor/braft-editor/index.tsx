import React from 'react';
import BraftEditor, { EditorState } from 'braft-editor';
import 'braft-editor/dist/index.css';
import { ContentUtils } from 'braft-utils';
import { fetchEditorContent, saveEditorContent } from './service';
import { underDotExt, keyboardExt } from './extension';
import styles from './index.less';
import { Row, Col } from 'antd';
import RichTextEditor from './components/Editor';
import RichTextViewer from './components/Viewer';

// 加载扩展模块
// BraftEditor.use可以同时传入单个或多个扩展
// BraftEditor.use(ext) 或者 BraftEditor.use([ext1, ext2, [ext3, ext4]])都是合法的
BraftEditor.use([underDotExt, keyboardExt]);

interface IState {
  editorState: EditorState;
}

class Editor extends React.Component<any, IState> {
  readonly state: IState = {
    editorState: undefined,
  };

  async componentDidMount() {
    const htmlContent = await fetchEditorContent();
    this.setState({ editorState: BraftEditor.createEditorState(htmlContent) });
  }

  handleEditorChange = (editorState: any) => {
    this.setState({ editorState });
  };

  submitContent = async () => {
    const { editorState } = this.state;
    if (!!editorState) {
      const htmlContent = editorState.toHTML();
      const result = await saveEditorContent(htmlContent);
      console.log(result);
    }
  };

  handleClick = (text: string) => () => {
    const { editorState } = this.state;
    this.setState({
      editorState: ContentUtils.insertText(editorState, text),
    });
  };
  render() {
    const { editorState } = this.state;

    return (
      <div id="braft-editor-wrapper">
        <BraftEditor
          id="braft-editor-with-extension"
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
          /**
           * 自定义内置控件
           * - 使用controls指定需要展示的控件
           * - 使用contentStyle调整编辑区域的高度，并增加内阴影
           * - 如果仅需要隐藏少量控件，使用excludeControls更方便
           * - 请仅在需要动态设置样式的时候使用contentStyle，否则推荐使用contentClassName
           */
          controls={['bold', 'fullscreen']}
          contentClassName={styles.content}
          /**
           * 增加扩展控件
           * - 使用extendControls属性添加扩展控件
           * - 使用ContentUtils在外部修改编辑器内容
           * - extendControls中的每一项，都需要指定唯一的key属性
           * - extendControls中的项目，放到controls属性中同样有效
           * - 只有用受控组件的方式使用编辑器，才能使用ContentUtils
           * - 若用受控组件的方式，必须使用BraftEditor.createEditorState()来创建初始editorState
           */
          extendControls={[
            {
              key: 'custom-button',
              type: 'button',
              text: '插入文本',
              onClick: this.handleClick('Hello World!\n'),
            },
            {
              key: 'custom-dropdown',
              type: 'dropdown',
              text: '选择变量',
              component: [
                <div
                  key="1"
                  className={styles.variable}
                  onClick={this.handleClick('{{ variable1 }}\n')}
                >
                  变量一
                </div>,
                <div
                  key="2"
                  className={styles.variable}
                  onClick={this.handleClick('{{ variable2 }}\n')}
                >
                  变量二
                </div>,
                <div
                  key="3"
                  className={styles.variable}
                  onClick={this.handleClick('{{ variable3 }}\n')}
                >
                  变量三
                </div>,
                <div
                  key="4"
                  className={styles.variable}
                  onClick={this.handleClick('{{ variable4 }}\n')}
                >
                  变量四
                </div>,
                <div
                  key="5"
                  className={styles.variable}
                  onClick={this.handleClick('{{ variable5 }}\n')}
                >
                  变量五
                </div>,
              ],
            },
          ]}
          /**
           * 添加预览功能
           */

          /**
           * 设置媒体库初始内容
           */

          /**
           * 在Ant Design表单中使用
           */

          /**
           * 集成Ant Design上传组件
           */

          /**
           * 输出HTML单位转换为rem
           */

          /**
           * 增加着重号样式控制
           * - 编写一个简单的编辑器内联样式(inline-style)扩展
           * - 使用BraftEditor.use加载编辑器扩展
           */

          /**
           * 增加按键展示效果
           * - 编写一个简单的编辑器entity扩展
           * - 使用BraftEditor.use加载编辑器扩展
           */

          /**
           * 使用自定义表情包扩展
           */

          /**
           * 使用高级取色器扩展
           */

          /**
           * 使用代码高亮扩展
           */
        />
        <Row gutter={[0x0c, 0x0c]} style={{ marginTop: 0x0c }}>
          <Col span={0x0c}>
            <RichTextEditor value={editorState} onChange={this.handleEditorChange} />
          </Col>
          <Col span={0x0c}>
            <RichTextViewer value={editorState?.toHTML()} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Editor;
