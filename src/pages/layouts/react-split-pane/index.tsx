import React from 'react';
import SplitPane from 'react-split-pane';
import styles from './index.less';

const Demo = () => {
  return (
    <div className={styles.reactSplitPaneWrapper}>
      <SplitPane split="vertical" minSize={100} maxSize={128}>
        <div>
          <ul className={styles.menu}>
            <li>首页</li>
            <li>产品</li>
            <li>关于</li>
          </ul>
        </div>

        <SplitPane split="horizontal" minSize={56} maxSize={100}>
          <div
            style={{
              // background: '#A00',
              color: '#FFF',
              lineHeight: '50px',
              fontSize: '20px',
              fontWeight: 600,
              width: '100%',
              paddingLeft: '20px',
            }}
          >
            首页
          </div>
          <div className={styles.content}>内容</div>
        </SplitPane>
      </SplitPane>
    </div>
  );
};

export default Demo;
