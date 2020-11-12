import React from 'react';
import classnames from 'classnames/bind';
import { Table } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import styles from './styles.less';

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
));

const columns = [
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 30,
    render: () => <DragHandle />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const initialData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    index: 0,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    index: 1,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    index: 2,
  },
];

const SortableItem = sortableElement(props => <tr {...props} />);

const SortableContainer = sortableContainer(props => <tbody {...props} />);

const SortableTable = () => {
  const [data, setData] = React.useState(initialData);

  const DraggableContainer = props => <SortableContainer {...props} />;

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = data.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <Table
      rowKey="index"
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default SortableTable;
