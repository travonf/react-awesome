import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const initialValue = `// monaco-editor 编辑器打包
export default {
  chainWebpack: (config) => {
    config.plugin('monaco-editor-webpack-plugin').use(
      // 更多配置 https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      new MonacoWebpackPlugin(),
    );
    config
    .plugin('d1-ignore')
      .use(
        // eslint-disable-next-line
        require('webpack/lib/IgnorePlugin'), [
          /^((fs)|(path)|(os)|(crypto)|(source-map-support))$/, /vs(\/|\\)language(\/|\\)typescript(\/|\\)lib/
        ]
      )
    .end()
    .plugin('d1-replace')
      .use(
        // eslint-disable-next-line
        require('webpack/lib/ContextReplacementPlugin'),
        [
          /monaco-editor(\\|\/)esm(\\|\/)vs(\\|\/)editor(\\|\/)common(\\|\/)services/,
          __dirname,
        ]
      )
    return config;
  }
}
`;

class CodeEditor extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: initialValue,
      theme: 'vs-dark',
    };
  }

  editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor, monaco);
    editor.focus();
  };

  handleChange = (value: string, e: any) => {
    console.log('onChange', value, e);
    this.setState({ value });
  };

  render() {
    const { value, theme } = this.state;

    return (
      <div>
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme={theme}
          options={{
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: false,
          }}
          value={value}
          onChange={this.handleChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default CodeEditor;
