import React from 'react';
import { Tabs } from 'antd';
import CheckLists from './examples/check-lists';
import EditableVoids from './examples/editable-voids';
import Embeds from './examples/embeds';
import ForcedLayout from './examples/forced-layout';
import HoveringToolbar from './examples/hovering-toolbar';
import HugeDocument from './examples/huge-document';
import Images from './examples/images';
import Links from './examples/links';
import MarkdownPreview from './examples/markdown-preview';
import MarkdownShortcuts from './examples/markdown-shortcuts';
import Mentions from './examples/mentions';
import PasteHtml from './examples/paste-html';
import PlainText from './examples/plaintext';
import ReadOnly from './examples/read-only';
import RichText from './examples/richtext';
import SearchHighlighting from './examples/search-highlighting';
import CodeHighlighting from './examples/code-highlighting';
import Tables from './examples/tables';
import styles from './index.less';

// prettier-ignore
const EXAMPLES = [
  ['✅ Read Only',           'read-only',           ReadOnly,           '<Editable readOnly />'],
  ['✅ Plain Text',          'plaintext',           PlainText,          'showing the most basic case: a glorified <textarea>.'],
  ['❎ Rich Text',           'richtext',            RichText,           `showing the features you'd expect from a basic editor.`],
  ['✅ Checklists',          'check-lists',         CheckLists,         '学会checkbox更新model, ReactEditor.findPath, Transforms.setNodes'],
  ['❎ Editable Voids',      'editable-voids',      EditableVoids,      ''],
  ['❎ Links',               'links',               Links,              'showing how wrap text in inline nodes with associated data.'],
  ['✅ Images',              'images',              Images,             'showing how to use void (text-less) nodes to add images.'],
  ['✅ Embeds',              'embeds',              Embeds,             ''],
  ['✅ Tables',              'tables',              Tables,             'showing how to nest blocks to render more advanced components.'],
  ['✅ Forced Layout',       'forced-layout',       ForcedLayout,       'showing how to use constraints to enforce a document structure.'],
  ['✅ Huge Document',       'huge-document',       HugeDocument,       ''],
  ['🔳 Mentions',            'mentions',            Mentions,           ''],
  ['🔳 Hovering Toolbar',    'hovering-toolbar',    HoveringToolbar,    'showing how a hovering toolbar can be implemented.'],
  ['🔳 Markdown Preview',    'markdown-preview',    MarkdownPreview,    ''],
  ['🔳 Markdown Shortcuts',  'markdown-shortcuts',  MarkdownShortcuts,  'showing how to add key handlers for Markdown-like shortcuts.'],
  ['🔳 Paste HTML',          'paste-html',          PasteHtml,          'showing how to use an HTML serializer to handle pasted HTML.'],
  ['🔳 Code Highlighting',   'code-highlighting',   CodeHighlighting,   'showing how to use decorations to dynamically format text.'],
  ['🔳 Search Highlighting', 'search-highlighting', SearchHighlighting, ''],
];

const Demo = () => {
  return (
    <div className={styles.wrapper}>
      <Tabs type="card" tabPosition="left" defaultActiveKey="links">
        {EXAMPLES.map(([tab, key, Component, desc]) => (
          <Tabs.TabPane key={key as string} tab={tab}>
            <div className={styles.box}>
              <h1 className={styles.desc}>{desc}</h1>
              <div className={styles.editor}>
                <Component />
              </div>
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

Demo.menu = { name: 'Slate' };

export default Demo;
