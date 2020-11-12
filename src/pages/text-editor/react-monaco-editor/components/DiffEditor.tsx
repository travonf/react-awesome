import React from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';

class DiffEditor extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: `// DiffEditor
const a: string = "hello Monaco";

const b: Function = (x: number) => x + x;

function c(x: number) {
  return x + x
}`,
      orig: `// DiffEditor
const a: string = "hello World!";

const b: Function = (x: number) => x * x;

function c(x: number) {
  return x * x
}`,
    };
  }

  handleChange = (value: string) => {
    console.log(value);
    this.setState({ code: value });
  };

  render() {
    const { code, orig } = this.state;
    return (
      <div>
        <MonacoDiffEditor
          width="800"
          height="600"
          language="typescript"
          original={orig}
          value={code}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default DiffEditor;
