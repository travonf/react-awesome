import React from 'react';
import Logo from '@/assets/react.svg';
import styles from './index.less';

const Index = () => (
  <div className={styles.wrapper}>
    <img className={styles.logo} src={Logo} alt="logo" />
  </div>
);

Index.icon = 'Home';
// Index.menuRender = false;
Index.headerRender = false;
Index.footerRender = false;

export default Index;
