import React from 'react';
import Highlighter from 'react-highlight-words';
import styles from './index.less';

const ReactHighlightWords = () => {
  return (
    <Highlighter
      autoEscape
      searchWords={['and', 'or', 'the']}
      textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
      highlightClassName={styles.highlight}
      // highlightStyle={{
      //   background: 'orange',
      //   padding: '0 4px',
      //   borderRadius: '4px',
      // }}
    />
  );
};

export default ReactHighlightWords;
