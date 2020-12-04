import React from 'react';
import { Tabs } from 'antd';
import Ai from './components/ai';
import Bi from './components/bi';
import Bs from './components/bs';
import Cg from './components/cg';
import Di from './components/di';
import Fa from './components/fa';
import Fc from './components/fc';
import Fi from './components/fi';
import Gi from './components/gi';
import Go from './components/go';
import Gr from './components/gr';
import Hi from './components/hi';
import Im from './components/im';
import Io from './components/io';
import Io5 from './components/io5';
import Md from './components/md';
import Ri from './components/ri';
import Si from './components/si';
import Ti from './components/ti';
import Vsc from './components/vsc';
import Wi from './components/wi';

const Demo = () => {
  return (
    <Tabs type="card">
      <Tabs.TabPane key="Ai" tab="Ant Design">
        <Ai />
      </Tabs.TabPane>
      <Tabs.TabPane key="Bi" tab="Bootstrap">
        <Bi />
      </Tabs.TabPane>
      <Tabs.TabPane key="Bs" tab="BoxIcons">
        <Bs />
      </Tabs.TabPane>
      <Tabs.TabPane key="Cg" tab="css.gg">
        <Cg />
      </Tabs.TabPane>
      <Tabs.TabPane key="Di" tab="Devicons">
        <Di />
      </Tabs.TabPane>
      <Tabs.TabPane key="Fa" tab="Font Awesome">
        <Fa />
      </Tabs.TabPane>
      <Tabs.TabPane key="Fc" tab="Flat Color">
        <Fc />
      </Tabs.TabPane>
      <Tabs.TabPane key="Fi" tab="Feather">
        <Fi />
      </Tabs.TabPane>
      <Tabs.TabPane key="Gi" tab="Game">
        <Gi />
      </Tabs.TabPane>
      <Tabs.TabPane key="Go" tab="Github Octicons">
        <Go />
      </Tabs.TabPane>
      <Tabs.TabPane key="Gr" tab="Grommet">
        <Gr />
      </Tabs.TabPane>
      <Tabs.TabPane key="Hi" tab="Heroicons">
        <Hi />
      </Tabs.TabPane>
      <Tabs.TabPane key="Im" tab="IcoMoon Free">
        <Im />
      </Tabs.TabPane>
      <Tabs.TabPane key="Io" tab="Ionicons 4">
        <Io />
      </Tabs.TabPane>
      {/*
      <Tabs.TabPane key="Io" tab="Ionicons 5">
        <Io5 />
      </Tabs.TabPane>
      */}
      <Tabs.TabPane key="Md" tab="Material Design">
        <Md />
      </Tabs.TabPane>
      <Tabs.TabPane key="Ri" tab="Remix">
        <Ri />
      </Tabs.TabPane>
      <Tabs.TabPane key="Si" tab="Simple">
        <Si />
      </Tabs.TabPane>
      <Tabs.TabPane key="Ti" tab="Typicons">
        <Ti />
      </Tabs.TabPane>
      <Tabs.TabPane key="Vsc" tab="VS Code">
        <Vsc />
      </Tabs.TabPane>
      <Tabs.TabPane key="Wi" tab="Weather">
        <Wi />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Demo;
