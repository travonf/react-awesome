import React, { useState, useEffect } from 'react';
import { iconCard } from './icon-card';
import styles from '../index.less';

export default () => {
  const [modules, setModules] = useState({});

  useEffect(() => {
    import('react-icons/gi')
      .then(setModules)
      .catch(console.error);
  }, []);

  return <div className={styles.icons}>{Object.keys(modules).map(iconCard(modules))}</div>;
};
