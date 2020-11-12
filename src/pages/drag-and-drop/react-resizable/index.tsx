import React from 'react';
import classnames from 'classnames/bind';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import styles from './styles.less';

const cx = classnames.bind(styles);

const initialColumns = [
  {
    title: 'Date',
    dataIndex: 'date',
    width: 200,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 100,
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 100,
  },
  {
    title: 'Note',
    dataIndex: 'note',
    width: 100,
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 0,
    date: '2018-02-11',
    amount: 120,
    type: 'income',
    note: 'transfer',
  },
  {
    key: 1,
    date: '2018-03-11',
    amount: 243,
    type: 'income',
    note: 'transfer',
  },
  {
    key: 2,
    date: '2018-04-11',
    amount: 98,
    type: 'income',
    note: 'transfer',
  },
];

const ReactResizable: React.FC = props => {
  const [columns, setColumns] = React.useState<any[]>(initialColumns);
  console.log(columns);

  const handleResize = (index: number) => (e, { size }) => {
    setColumns(columns => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return nextColumns;
    });
  };

  return (
    <Table
      bordered
      components={{
        header: {
          cell: ResizableTitle,
        },
      }}
      columns={columns.map((column, index) => ({
        ...column,
        onHeaderCell: col => ({
          width: col.width,
          onResize: handleResize(index),
        }),
      }))}
      dataSource={data}
    />
  );
};

export default ReactResizable;

const ResizableTitle: React.FC<any> = props => {
  const { width, onResize, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className={cx('react-resizable-handle')}
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSeletHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};
