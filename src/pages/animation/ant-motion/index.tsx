import React from 'react';
import { Tabs } from 'antd';
import DemoGroup01 from './components/tween-one';
import DemoGroup02 from './components/animate';
import DemoGroup03 from './components/queue-anim';
import DemoGroup04 from './components/texty';
import DemoGroup05 from './components/scroll-anim';
import DemoGroup06 from './components/banner-anim';
import styles from './index.less';

function Demo() {
  return (
    <Tabs defaultActiveKey="进出场动画">
      <Tabs.TabPane key="单元素动画" tab="单元素动画">
        <DemoGroup01 />
      </Tabs.TabPane>

      <Tabs.TabPane key="CSS样式动画" tab="CSS样式动画">
        <DemoGroup02 />
      </Tabs.TabPane>

      <Tabs.TabPane key="进出场动画" tab="进出场动画">
        <DemoGroup03 />
      </Tabs.TabPane>

      <Tabs.TabPane key="文字动画" tab="文字动画">
        <DemoGroup04 />
      </Tabs.TabPane>

      <Tabs.TabPane key="页面滚动动画" tab="页面滚动动画">
        <DemoGroup05 />
      </Tabs.TabPane>

      <Tabs.TabPane key="BANNER动画" tab="BANNER动画">
        <DemoGroup06 />
      </Tabs.TabPane>
    </Tabs>
  );
}

Demo.menu = { name: 'Ant motion' };

export default Demo;
