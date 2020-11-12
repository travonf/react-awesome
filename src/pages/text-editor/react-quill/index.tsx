import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [value, setValue] = React.useState('');

  return (
    <div id="react-quill-wrapper">
      <ReactQuill theme="snow" style={{ height: 400 }} value={value} onChange={setValue} />
    </div>
  );
};

export default Editor;
