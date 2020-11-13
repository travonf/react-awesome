import React from 'react';
import { Moment } from 'moment';
import classNames from 'classnames/bind';
import { Select, Calendar } from 'antd';
import styles from './index.less';

const cx = classNames.bind(styles);

const MultipleDatePicker: React.FC<{
  value: string[];
  onChange: Function;
}> = props => {
  const { value, onChange } = props;

  const dateFullCellRender = (date: Moment) => {
    const d = date.format('YYYY-MM-DD');
    return (
      <div
        className={cx({
          'ant-picker-cell-inner': true,
          'ant-picker-calendar-date': false,
          'ant-picker-calendar-date-value': true,
          'ant-picker-cell-selected': value.some(item => item === d),
        })}
      >
        {date.format('DD')}
      </div>
    );
  };

  const handleCalendarSelect = (date: Moment) => {
    const d = date.format('YYYY-MM-DD');
    const i = value.findIndex(item => item === d);
    const t = [...value];
    if (i !== -1) {
      t.splice(i, 1);
    } else {
      t.push(d);
    }
    onChange(t);
  };

  const handleDeselect = (str: string) => {
    onChange(value.filter(item => item !== str));
  };

  const handleClear = () => {
    onChange([]);
  };

  return (
    <Select
      mode="multiple"
      showArrow
      value={value}
      onDeselect={handleDeselect}
      allowClear
      onClear={handleClear}
      style={{ width: 300 }}
      maxTagCount={2}
      defaultOpen={false}
      placeholder="请选择"
      dropdownRender={menu => (
        <Calendar
          fullscreen={false}
          dateFullCellRender={dateFullCellRender}
          onSelect={handleCalendarSelect}
        />
      )}
    />
  );
};

export default MultipleDatePicker;
