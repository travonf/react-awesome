import React from 'react';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import styles from './index.less';

function Demo(props) {
  return (
    <TweenOne
      animation={{
        x: 80,
        scale: 0.5,
        rotate: 120,
        yoyo: true, // demo 演示需要
        repeat: -1, // demo 演示需要
        duration: 1000,
      }}
      paused={props.paused}
      style={{ transform: 'translateX(-80px)' }}
      className={styles['code-box-shape']}
    />
  );
}

Demo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  animation: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // 需要执行动画的参数
  paused: PropTypes.bool, // 暂停动画
  reverse: PropTypes.bool, // 倒放动画
  reverseDelay: PropTypes.number, // 开始倒放时的延时
  repeat: PropTypes.number, // 所有 animation 里的动画 (时间轴) 循环
  yoyo: PropTypes.bool, // animation 里的动画在第一次重复时执行返回动画, 如抽屉开关。
  onChange: PropTypes.func, // 全局变动回调
  moment: PropTypes.number, // 设置当前时间上的时间，设置完后设回 null
  // attr string	style	// style or attr, attr 为替换标签上的属性(attribute). SvgMorphPlugin 必须为 attr.
  resetStyle: PropTypes.bool, // 更新 animation 数据时，是否重置初始样式。
  // component React.Element/String	// div	需要替换的标签
  componentProps: PropTypes.object, // component 如果是组件，component 组件的 props 写在此处.
};

Demo.defaultProps = {
  children: null,
  className: null,
  animation: null,
  paused: false,
  reverse: false,
  reverseDelay: 0,
  repeat: 0,
  yoyo: false,
  onChange: null,
  moment: null,
  // attr
  resetStyle: false,
  // component
  componentProps: null,
};

// ReactDOM.render(<Demo/>, mountNode);
export default Demo;
