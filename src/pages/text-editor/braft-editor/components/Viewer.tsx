import React from 'react';
import styles from './style.less';

const Viewer: React.FC<any> = props => {
  const { value, children, ...restProps } = props;

  return (
    <div className={styles['braft-container']}>
      <div className={styles['braft-controllbar']}>
        <span>Preview</span>
      </div>
      <div
        className={styles['braft-content']}
        {...restProps}
        dangerouslySetInnerHTML={{ __html: value || children }}
      />
    </div>
  );
};

export default Viewer;
