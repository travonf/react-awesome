import React from 'react';
import Chart from './Chart';

const random = () => Math.round(Math.random() * 100);

const dataSource = [
  { x: '01月', y: random(), z: random() },
  { x: '02月', y: random(), z: random() },
  { x: '03月', y: random(), z: random() },
  { x: '04月', y: random(), z: random() },
  { x: '05月', y: random(), z: random() },
  { x: '06月', y: random(), z: random() },
  { x: '07月', y: random(), z: random() },
  { x: '08月', y: random(), z: random() },
  { x: '09月', y: random(), z: random() },
  { x: '10月', y: random(), z: random() },
  { x: '11月', y: random(), z: random() },
  { x: '12月', y: random(), z: random() },
];

function Demo(props) {
  return <Chart data={dataSource} Axis={['x', 'y']} />;
}

Demo.menu = { name: 'BizCharts' };

export default Demo;
