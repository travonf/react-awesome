import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import styles from './index.less';

function handleClick(e, data) {
  console.log(data.foo);
}

function Demo() {
  return (
    <div>
      <ContextMenuTrigger id="some_unique_identifier">
        <div className="well">Right click to see the menu</div>
      </ContextMenuTrigger>

      <ContextMenu id="some_unique_identifier" className={styles.contextMenu}>
        <MenuItem
          className={styles.menuItem}
          data={{ foo: 'ContextMenu Item 1' }}
          onClick={handleClick}
        >
          ContextMenu Item 1
        </MenuItem>
        <MenuItem
          className={styles.menuItem}
          data={{ foo: 'ContextMenu Item 2' }}
          onClick={handleClick}
        >
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem
          className={styles.menuItem}
          data={{ foo: 'ContextMenu Item 3' }}
          onClick={handleClick}
        >
          ContextMenu Item 3
        </MenuItem>
      </ContextMenu>
    </div>
  );
}

export default Demo;
