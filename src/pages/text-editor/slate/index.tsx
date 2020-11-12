import React from 'react';
import { Tabs } from 'antd';
import Study from './components/study';
import CheckLists from './components/check-lists';
import EditableVoids from './components/editable-voids';
import Embeds from './components/embeds';
import ForcedLayout from './components/forced-layout';
import HoveringToolbar from './components/hovering-toolbar';
import HugeDocument from './components/huge-document';
import Images from './components/images';
import Links from './components/links';
import MarkdownPreview from './components/markdown-preview';
import MarkdownShortcuts from './components/markdown-shortcuts';
import Mentions from './components/mentions';
import PasteHtml from './components/paste-html';
import PlainText from './components/plaintext';
import ReadOnly from './components/read-only';
import RichText from './components/richtext';
import SearchHighlighting from './components/search-highlighting';
import CodeHighlighting from './components/code-highlighting';
import Tables from './components/tables';
import styles from './index.less';

// prettier-ignore
const EXAMPLES = [
  ['✅练习', 'Study', 'study', Study],
  ['✅只读', 'Read-only', 'read-only', ReadOnly],
  ['✅纯文本', 'Plain Text', 'plaintext', PlainText, 'showing the most basic case: a glorified <textarea>.'],
  ['✅待办项', 'Checklists', 'check-lists', CheckLists],
  ['❎富文本', 'Rich Text', 'richtext', RichText, 'showing the features you\'d expect from a basic editor.'],
  ['❎可编辑空元素', 'Editable Voids', 'editable-voids', EditableVoids],
  ['❎链接', 'Links', 'links', Links, 'showing how wrap text in inline nodes with associated data.'],
  ['✅图片', 'Images', 'images', Images, 'showing how to use void (text-less) nodes to add images.'],
  ['✅嵌入', 'Embeds', 'embeds', Embeds],
  ['✅强制布局', 'Forced Layout', 'forced-layout', ForcedLayout, 'showing how to use constraints to enforce a document structure.'],
  ['✅超大文档', 'Huge Document', 'huge-document', HugeDocument],
  ['🔳悬停工具栏', 'Hovering Toolbar', 'hovering-toolbar', HoveringToolbar, 'showing how a hovering toolbar can be implemented.'],
  ['🔳Markdown预览', 'Markdown Preview', 'markdown-preview', MarkdownPreview],
  ['🔳Markdown快捷', 'Markdown Shortcuts', 'markdown-shortcuts', MarkdownShortcuts, 'showing how to add key handlers for Markdown-like shortcuts.'],
  ['🔳提及', 'Mentions', 'mentions', Mentions],
  ['🔳解析HTML', 'Paste HTML', 'paste-html', PasteHtml, 'showing how to use an HTML serializer to handle pasted HTML.'],
  ['🔳检索高亮', 'Search Highlighting', 'search-highlighting', SearchHighlighting],
  ['🔳代码高亮', 'Code Highlighting', 'code-highlighting', CodeHighlighting, 'showing how to use decorations to dynamically format text.'],
  ['🔳表格', 'Tables', 'tables', Tables, 'showing how to nest blocks to render more advanced components.'],
];

const Demo = () => {
  return (
    <div className={styles.wrapper}>
      <Tabs type="card" tabPosition="left" defaultActiveKey="forced-layout">
        {EXAMPLES.map(([tabCN, tabEn, key, Component, desc]) => (
          <Tabs.TabPane key={key as string} tab={tabCN}>
            <div className={styles.box}>
              {/*
              <h1 className={styles.desc}>
                {tabEn} - {desc || key}
              </h1>
              */}
              <Component />
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Demo;
