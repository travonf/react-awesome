import React, { useRef, useState } from 'react';
import { compose, map } from 'ramda';
import { Card, Form, Switch, Radio, Button, Drawer, Tag, Space } from 'antd';
import { TableProps, ColumnProps } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import ProTable, { ProColumns, ActionType, TableDropdown } from '@ant-design/pro-table';
import Markdown from 'react-markdown';
import request from 'umi-request';
import { GithubIssueItem, Label } from './typings';
import styles from './index.less';

const label = (item: Label) => {
  if (!item) return <div>-</div>;
  const { id, color, name } = item;
  return (
    <Tag key={id} color={color}>
      {name}
    </Tag>
  );
};
const space = (children: any) => <div>{children}</div>;
const labelsRender = compose(space, map(label));

const defaultColumns: ProColumns<GithubIssueItem>[] = [
  {
    title: '#',
    dataIndex: 'index',
    width: 72,
    // align: 'center',
    valueType: 'indexBorder',
  },
  {
    title: '问题号',
    dataIndex: 'number',
    width: 108,
    // hideInTable: true,
    responsive: ['xxl'],
    renderText: text => `#${text}`,
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: '30%',
    ellipsis: true,
    copyable: true,
    // hideInSearch: true,
    // rules: [{ required: true, message: '此项为必填项' }],
  },
  {
    title: '状态',
    dataIndex: 'state',
    // width: '10%',
    filters: true,
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: { text: '未解决', status: 'Error' },
      closed: { text: '已解决', status: 'Success' },
      processing: { text: '解决中', status: 'Processing' },
    },
  },
  {
    title: '锁定',
    dataIndex: 'locked',
    align: 'center',
    // hideInTable: true,
    responsive: ['xxl'],
    valueEnum: { 0: '否', 1: '是' },
    renderText: text => (
      <Switch size="default" checkedChildren="是" unCheckedChildren="否" checked={text} />
    ),
  },
  {
    title: '标签',
    dataIndex: 'labels',
    renderText: text => labelsRender(text || []),
  },
  {
    title: '评论数',
    dataIndex: 'comments',
    align: 'right',
    valueType: 'digit',
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    align: 'center',
    valueType: 'dateTime',
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    align: 'center',
    valueType: 'dateTime',
    // hideInTable: true,
    responsive: ['xxl'],
  },
  {
    title: '关闭时间',
    dataIndex: 'closed_at',
    align: 'center',
    valueType: 'dateTime',
    // hideInTable: true,
    responsive: ['xxl'],
  },
  {
    title: '操作',
    valueType: 'option',
    align: 'center',
    renderText: (text, record, index, action) => [
      <a key="1" href={record.html_url} target="_blank" rel="noopener noreferrer">
        链路
      </a>,
      <a key="2" href={record.html_url} target="_blank" rel="noopener noreferrer">
        报警
      </a>,
      <a key="3" href={record.html_url} target="_blank" rel="noopener noreferrer">
        查看
      </a>,
      <TableDropdown
        key="4"
        onSelect={() => {
          action.reload;
        }}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const defaultTitle = () => '表格标题';
const defaultFooter = () => '表格尾部';
const defaultExpandable = {
  expandedRowClassName: (record: any, index: any, indent: any) => styles.expandedRow,
  expandedRowRender: (record: GithubIssueItem) => (
    <Markdown
      className={styles.markdown}
      escapeHtml={false}
      skipHtml={false}
      source={record.body}
    />
  ),
};
const defaultRowSelection = {};
const defaultScroll = { x: undefined, y: undefined };
const initialTableProps: TableProps<GithubIssueItem> & ColumnProps<GithubIssueItem> = {
  bordered: false,
  // loading: false,
  title: undefined,
  showHeader: true,
  footer: undefined,
  expandable: undefined,
  rowSelection: undefined,
  size: 'small',
  scroll: defaultScroll,
  tableLayout: undefined,
  ellipsis: true,
};

type KeyOfTableProps = keyof TableProps<GithubIssueItem>;

const Table = () => {
  const actionRef = useRef<ActionType>();
  const [tableProps, setTableProps] = useState(initialTableProps);
  const [visible, setVisible] = useState(false);

  const toolBarRender = () => [
    <Button key="3" type="primary" onClick={() => setVisible(true)}>
      <PlusOutlined />
      新建
    </Button>,
  ];

  const dataRequest = async (params = {}) =>
    request<{ data: GithubIssueItem[] }>('https://proapi.azurewebsites.net/github/issues', {
      params,
    });

  const handleTablePropsChange = (prop: KeyOfTableProps | string) => (
    e: React.MouseEvent<HTMLElement> | any,
  ) => {
    switch (prop) {
      case 'title':
        setTableProps({
          ...tableProps,
          [prop]: e ? defaultTitle : undefined,
        });
        break;
      case 'footer':
        setTableProps({
          ...tableProps,
          [prop]: e ? defaultFooter : undefined,
        });
        break;
      case 'expandable':
        setTableProps({
          ...tableProps,
          [prop]: e ? defaultExpandable : undefined,
        });
        break;
      case 'rowSelection':
        setTableProps({
          ...tableProps,
          [prop]: e ? defaultRowSelection : undefined,
        });
        break;
      case 'scroll.x':
        setTableProps({
          ...tableProps,
          scroll: e ? { ...tableProps.scroll, x: 1920 } : { ...tableProps.scroll, x: undefined },
        });
        break;
      case 'scroll.y':
        setTableProps({
          ...tableProps,
          scroll: e ? { ...tableProps.scroll, y: 600 } : { ...tableProps.scroll, y: undefined },
        });
        break;
      default:
        setTableProps({ ...tableProps, [prop]: e?.target?.value || e });
    }
  };

  const columns = defaultColumns.map(item => ({
    ...item,
    ellipsis: tableProps.ellipsis,
  }));
  if (tableProps.scroll?.x) {
    columns[0].fixed = 'left';
    columns[1].fixed = 'left';
    columns[columns.length - 1].fixed = 'right';
  }

  return (
    <div>
      <Card bordered={false} style={{ marginBottom: 16 }}>
        <Form layout="inline">
          <Form.Item label="显示边框">
            <Switch checked={!!tableProps.bordered} onChange={handleTablePropsChange('bordered')} />
          </Form.Item>
          <Form.Item label="正在加载">
            <Switch checked={!!tableProps.loading} onChange={handleTablePropsChange('loading')} />
          </Form.Item>
          <Form.Item label="显示标题">
            <Switch checked={!!tableProps.title} onChange={handleTablePropsChange('title')} />
          </Form.Item>
          <Form.Item label="显示表头">
            <Switch
              checked={!!tableProps.showHeader}
              onChange={handleTablePropsChange('showHeader')}
            />
          </Form.Item>
          <Form.Item label="显示表尾">
            <Switch checked={!!tableProps.footer} onChange={handleTablePropsChange('footer')} />
          </Form.Item>
          <Form.Item label="支持展开">
            <Switch
              checked={!!tableProps.expandable}
              onChange={handleTablePropsChange('expandable')}
            />
          </Form.Item>
          <Form.Item label="支持多选">
            <Switch
              checked={!!tableProps.rowSelection}
              onChange={handleTablePropsChange('rowSelection')}
            />
          </Form.Item>
          <Form.Item label="横向滚动">
            <Switch
              checked={!!tableProps.scroll?.x}
              onChange={handleTablePropsChange('scroll.x')}
            />
          </Form.Item>
          <Form.Item label="固定表头">
            <Switch
              checked={!!tableProps.scroll?.y}
              onChange={handleTablePropsChange('scroll.y')}
            />
          </Form.Item>
          {/*
          <Form.Item label="拥有数据">
            <Switch />
          </Form.Item>
          */}
          <Form.Item label="溢出省略">
            <Switch checked={!!tableProps.ellipsis} onChange={handleTablePropsChange('ellipsis')} />
          </Form.Item>
          <Form.Item label="表格尺寸">
            <Radio.Group
              size="middle"
              value={tableProps.size}
              onChange={handleTablePropsChange('size')}
            >
              <Radio.Button value="small">小</Radio.Button>
              <Radio.Button value="middle">中</Radio.Button>
              <Radio.Button value="large">大</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Card>

      <Drawer width={600} visible={visible} onClose={() => setVisible(false)}>
        <Button
          style={{ margin: 8 }}
          onClick={() => {
            actionRef?.current?.reload?.();
          }}
        >
          刷新
        </Button>
        <Button
          onClick={() => {
            actionRef?.current?.reset?.();
          }}
        >
          重置
        </Button>
        <ProTable<GithubIssueItem> type="form" columns={columns as any} onSubmit={console.log} />
      </Drawer>

      <ProTable<GithubIssueItem>
        {...tableProps}
        actionRef={actionRef}
        headerTitle="高级表格"
        toolBarRender={toolBarRender}
        search={{
          filterType: 'light',
        }}
        rowKey="id"
        columns={columns as any}
        request={dataRequest}
        dateFormatter="string"
        pagination={{
          showQuickJumper: true,
          defaultPageSize: 25,
        }}
      />
    </div>
  );
};

export default Table;
