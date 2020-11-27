import React from 'react';
import { Transforms } from 'slate';
import { ReactEditor, useEditor, useReadOnly } from 'slate-react';
import { css } from 'emotion';

const CheckListItemElement: React.FC<any> = ({ attributes, children, element }) => {
  const editor = useEditor();
  const readOnly = useReadOnly();
  const { checked } = element;

  return (
    <div
      {...attributes}
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;

        & + & {
          margin-top: 0;
        }
      `}
    >
      <span
        contentEditable={false}
        className={css`
          margin-right: 0.75em;
        `}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={event => {
            const path = ReactEditor.findPath(editor, element);
            Transforms.setNodes(editor, { checked: event.target.checked }, { at: path });
          }}
        />
      </span>
      <span
        contentEditable={!readOnly}
        suppressContentEditableWarning
        className={css`
          flex: 1;
          text-decoration: ${checked ? 'none' : 'line-through'};
          opacity: ${checked ? 0.666 : 1};

          &:focus {
            outline: none;
          }
        `}
      >
        {children}
      </span>
    </div>
  );
};

export default CheckListItemElement;
