import React from 'react';
import { Tabs, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';

function Demo() {
  const [show, setShow] = React.useState(true);

  return (
    <Tabs tabPosition="left">
      <Tabs.TabPane key="简单的例子" tab="简单的例子">
        <QueueAnim delay={300} className={styles.queueSimple}>
          <div key="a">Queue Demo</div>
          <div key="b">Queue Demo</div>
          <div key="c">Queue Demo</div>
          <div key="d">Queue Demo</div>
          <div key="e">Queue Demo</div>
          <div key="f">Queue Demo</div>
          <div key="g">Queue Demo</div>
          <div key="h">Queue Demo</div>
          <div key="i">Queue Demo</div>
          <div key="j">Queue Demo</div>
          <div key="k">Queue Demo</div>
          <div key="l">Queue Demo</div>
          <div key="m">Queue Demo</div>
          <div key="n">Queue Demo</div>
        </QueueAnim>
      </Tabs.TabPane>

      <Tabs.TabPane key="进场和离场" tab="进场和离场">
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          Switch
        </Button>
        <QueueAnim className={styles.queueSimple}>
          {show
            ? [
                <div key="a">Queue Demo</div>,
                <div key="b">Queue Demo</div>,
                <div key="c">Queue Demo</div>,
                <div key="d">Queue Demo</div>,
                <div key="e">Queue Demo</div>,
                <div key="f">Queue Demo</div>,
                <div key="g">Queue Demo</div>,
                <div key="h">Queue Demo</div>,
                <div key="i">Queue Demo</div>,
                <div key="j">Queue Demo</div>,
                <div key="k">Queue Demo</div>,
                <div key="l">Queue Demo</div>,
                <div key="m">Queue Demo</div>,
                <div key="n">Queue Demo</div>,
              ]
            : null}
        </QueueAnim>
      </Tabs.TabPane>

      <Tabs.TabPane key="属性设置" tab="属性设置"></Tabs.TabPane>

      <Tabs.TabPane key="添加与删除" tab="添加与删除"></Tabs.TabPane>

      <Tabs.TabPane key="自定义动画进出场" tab="自定义动画进出场"></Tabs.TabPane>

      <Tabs.TabPane key="一个复杂些的例子" tab="一个复杂些的例子"></Tabs.TabPane>
    </Tabs>
  );
}

export default Demo;
