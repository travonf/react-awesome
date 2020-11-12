import React, { useState, useMemo } from 'react';
import imageExts from 'image-extensions';
import isUrl from 'is-url';
import { Node, Transforms, createEditor } from 'slate';
import {
  Slate,
  Editable,
  useEditor,
  useSelected,
  useFocused,
  withReact,
  ReactEditor,
} from 'slate-react';
import { withHistory } from 'slate-history';
import { css } from 'emotion';

import { Button, Icon, Toolbar } from './components';

const ImagesExample = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  const editor = useMemo(() => withImages(withHistory(withReact(createEditor()))), []);

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Toolbar>
        <InsertImageButton />
      </Toolbar>
      <Editable renderElement={props => <Element {...props} />} placeholder="Enter some text..." />
    </Slate>
  );
};

export default ImagesExample;

const withImages = (editor: ReactEditor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = element => (element.type === 'image' ? true : isVoid(element));

  editor.insertData = data => {
    const text = data.getData('text/plain');
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const insertImage = (editor: ReactEditor, url: any) => {
  const text = { text: '' };
  const image = { type: 'image', url, children: [text] };
  Transforms.insertNodes(editor, image);
};

const Element: React.FC<any> = props => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case 'image':
      return <ImageElement {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const ImageElement: React.FC<any> = props => {
  const { attributes, children, element } = props;
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
          `}
        />
      </div>
      {children}
    </div>
  );
};

const InsertImageButton = () => {
  const editor = useEditor();

  return (
    <Button
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        const url = window.prompt('Enter the URL of the image:');
        if (!url) return;
        insertImage(editor, url);
      }}
    >
      <Icon>image</Icon>
    </Button>
  );
};

const isImageUrl = (url: string) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split('.').pop();
  return imageExts.includes(ext!);
};

const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text:
          'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.',
      },
    ],
  },
  {
    type: 'image',
    url: 'https://source.unsplash.com/kFrdX5IeQzI',
    children: [{ text: '' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          'This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your keyboard and paste it anywhere in the editor!',
      },
    ],
  },
];
