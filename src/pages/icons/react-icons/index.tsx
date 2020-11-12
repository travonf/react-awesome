import React from 'react';
import { Spin, message } from 'antd';
// import loadable from '@loadable/component';
// import getIcons from './getIcons';
import copy from 'copy-to-clipboard';
import styles from './index.less';

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

function ReactIcons() {
  const [iconsId, setIconsId] = React.useState<string>('ai');
  const [modules, setModules] = React.useState<{}>({});

  React.useEffect(() => {
    import(`react-icons/ai`)
      .then(setModules)
      .catch(console.debug);
  }, [iconsId]);

  return (
    <div className={styles.icons}>
      {Object.keys(modules).map(name => (
        <IconCard key={name} icon={modules[name]} name={name} />
      ))}
    </div>
  );

  // const Icons = loadable.lib(() => getIcons(iconsId));
  // const Icons = loadable.lib(() => getIcons('ai'));
  // const Icons = loadable.lib(() => require('react-icons/ai'));
  // return (
  //   <Icons fallback={null}>
  //     {({ default: icons = {} }) => (
  //       <div className={styles.icons}>
  //         {Object.keys(icons).map(name => (
  //           <IconCard key={name} icon={icons[name]} name={name} />
  //         ))}
  //       </div>
  //     )}
  //   </Icons>
  // );
}

export default ReactIcons;
