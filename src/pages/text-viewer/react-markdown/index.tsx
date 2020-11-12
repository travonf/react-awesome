import React from 'react';
import Markdown from 'react-markdown';
import README from './LiveDemo.md';

const ReactMarkdown = () => {
  return <Markdown source={README} escapeHtml={false} />;
};

export default ReactMarkdown;
