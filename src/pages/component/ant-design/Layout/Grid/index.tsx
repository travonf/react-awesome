import React from 'react';
import { compose, map, range } from 'ramda';
import { Row, Col } from 'antd';
import colResponsiveProps from '@/styles/colResponsiveProps';
import styles from './index.less';

const row = (children: any, key: number) => (
  <Row key={key} className={styles.row}>
    {children}
  </Row>
);
const col = (number: number, key: number) => (
  <Col key={key} className={styles.col} {...colResponsiveProps[number]}>
    <div className={styles.content}>{number}</div>
  </Col>
);
const floor = (n: number) => Math.floor(0x18 / n);
// const gen = map(compose(row, map(col), range(0x00), floor));

const Demo = () => {
  return (
    // <>{gen(range(0x01, 0x18))}</>
    // <>{map(compose(row, col))(range(0x00, 0x18))}</>
    <>
      {map((i: number) => row(map((j: number) => col(i + 1, j))(range(0x00, floor(i + 1))), i))(
        range(0x00, 0x18),
      )}
    </>
  );
};

export default Demo;
