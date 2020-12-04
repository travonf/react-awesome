import React from 'react';
import copy from 'copy-to-clipboard';
import { message } from 'antd';
import styles from '../index.less';

const IconCard: React.FC<any> = ({ icon, name }) => {
  const copyToClipboard = () => {
    copy(name);
    message.success(`copy ${name} to clipboard success`);
  };

  const Icon = typeof icon === 'function' && icon({});

  return (
    <div className={styles.iconCard} onClick={copyToClipboard}>
      <div className={styles.icon}>{Icon}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default IconCard;

export const iconCard = (modules: object) => (name: string) => (
  <IconCard key={name} icon={modules[name]} name={name} />
);
