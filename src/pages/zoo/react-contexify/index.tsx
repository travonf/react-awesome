import React from 'react';
import { Menu, Item, Separator, Submenu, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

const ReactContexify = () => {
  return (
    <div>
      <MenuProvider id="menu_id" style={{ display: 'inline-block' }}>
        Right click me...
      </MenuProvider>
      <Menu id="menu_id">
        <Item onClick={console.log}>Lorem</Item>
        <Item onClick={console.log}>Ipsum</Item>
        <Separator />
        <Item disabled>Dolor</Item>
        <Submenu label="Foobar">
          <Item onClick={console.log}>Foo</Item>
          <Item onClick={console.log}>Bar</Item>
        </Submenu>
      </Menu>
    </div>
  );
};

export default ReactContexify;
