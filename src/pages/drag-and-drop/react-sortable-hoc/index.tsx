import React from 'react';
import classnames from 'classnames/bind';
import { Card, Table } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import styles from './styles.less';

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);
const SortableList = SortableContainer(({ items }) => (
  <ul>
    {items.map((value, index) => (
      <SortableItem key={value} index={index} value={value} />
    ))}
  </ul>
));

const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

const SortableComponent = () => {
  const [items, setItems] = React.useState(initialItems);

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return <SortableList items={items} onSortEnd={handleSortEnd} />;
};

export default SortableComponent;
