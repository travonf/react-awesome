import { Editor } from 'slate';
import { ReactEditor } from 'slate-react';

const withLinks = (editor: Editor & ReactEditor) => {
  const { insertData, insertText, isInline } = editor;

  return editor;
};

export default withLinks;
