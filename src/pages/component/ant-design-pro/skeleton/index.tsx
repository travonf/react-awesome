import React from 'react';
import styles from './style.less';

const ProSkeleton: React.FC<any> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default ProSkeleton;
