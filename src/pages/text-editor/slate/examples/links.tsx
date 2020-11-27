import React, { useState, useMemo } from 'react';
import { Node, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { Element } from './components';
import { withLinks } from './plugins';

import { Toolbar } from '../components';

const LinkExample = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  const editor = useMemo(() => withLinks(withHistory(withReact(createEditor()))), []);

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Toolbar>
        <LinkButton />
      </Toolbar>
      <Editable renderElement={props => <Element {...props} />} placeholder="Enter some text..." />
    </Slate>
  );
};

const LinkButton = props => {
  return null;
};

const initialValue = [
  {
    children: [
      {
        text: 'In addition to block nodes, you can create inline nodes, like ',
      },
      {
        type: 'link',
        url: 'https://en.wikipedia.org/wiki/Hypertext',
        children: [{ text: 'hyperlinks' }],
      },
      {
        text: '!',
      },
    ],
  },
  {
    children: [
      {
        text: 'This example shows hyperlinks in action. ',
      },
      {
        text: 'It features two ways to add links. ',
      },
      {
        text: 'You can either add a link via the toolbar icon above, ',
      },
      {
        text: 'or if you want in on a little secret, ',
      },
      {
        text: 'copy a URL to your keyboard and paste it while a range of text is selected.' // prettier-ignore
      },
    ],
  },
];

export default LinkExample;
