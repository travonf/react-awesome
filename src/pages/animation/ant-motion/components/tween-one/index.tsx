import React from 'react';
import { Tabs } from 'antd';
import Demo01 from './components-tween-one-demo-position';
import Demo02 from './components-tween-one-demo-timeline';
import Demo03 from './components-tween-one-demo-control';
import Demo04 from './components-tween-one-demo-easingPath';
import Demo05 from './components-tween-one-demo-children';
import Demo06 from './components-tween-one-demo-svgDraw';
import Demo07 from './components-tween-one-demo-svgMorph';
import Demo08 from './components-tween-one-demo-path';
import Demo09 from './components-tween-one-demo-bezier';
import styles from './index.less';

function App(props) {
  return (
    <Tabs tabPosition="left">
      <Tabs.TabPane key="基本动画效果" tab="基本动画效果">
        <Demo01 />
      </Tabs.TabPane>
      <Tabs.TabPane key="时间轴效果" tab="时间轴效果">
        <Demo02 />
      </Tabs.TabPane>
      <Tabs.TabPane key="变更动画参数" tab="变更动画参数">
        <Demo03 />
      </Tabs.TabPane>
      <Tabs.TabPane key="路径缓动" tab="路径缓动">
        <Demo04 />
      </Tabs.TabPane>
      <Tabs.TabPane key="数值变化" tab="数值变化">
        <Demo05 />
      </Tabs.TabPane>
      <Tabs.TabPane key="SVG线性动画" tab="SVG线性动画">
        <Demo06 />
      </Tabs.TabPane>
      <Tabs.TabPane key="SVG形变动画" tab="SVG形变动画">
        <Demo07 />
      </Tabs.TabPane>
      <Tabs.TabPane key="曲线路径动画" tab="曲线路径动画">
        <Demo08 />
      </Tabs.TabPane>
      <Tabs.TabPane key="曲线动画" tab="曲线动画">
        <Demo09 />
      </Tabs.TabPane>
    </Tabs>
  );
}

export default App;
