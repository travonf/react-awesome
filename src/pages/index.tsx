import React from 'react';
import Logo from '@/assets/react.svg';
import styles from './index.less';

export default () => (
  <div className={styles.wrapper}>
    <img className={styles.logo} src={Logo} alt="logo" />
  </div>
);
