import { Editor, Range, Point, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';

const withChecklists = (editor: Editor & ReactEditor) => {
  const { deleteBackward } = editor;

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'check-list-item',
      });

      if (match) {
        const [, path] = match;
        const start = Editor.start(editor, path);

        if (Point.equals(selection.anchor, start)) {
          Transforms.setNodes(
            editor,
            { type: 'paragraph' },
            { match: n => n.type === 'check-list-item' },
          );
        }
      }
    }

    deleteBackward(...args);
  };

  return editor;
};

export default withChecklists;
