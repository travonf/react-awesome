import React from 'react';
import { Avatar, Button, Input, Result } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProLayout, {
  PageContainer,
  DefaultFooter,
  SettingDrawer,
  ProSettings,
} from '@ant-design/pro-layout';
import styles from './index.less';

type Settings = Partial<ProSettings> | undefined;

const Layout: React.FC<any> = props => {
  const { routes } = props;
  const [route] = routes;
  const [settings, setSetting] = React.useState<Settings>(undefined);
  const [pathname, setPathname] = React.useState<string>('/about');

  const menuExtraRender = ({ collapsed }: any) =>
    !collapsed && <Input.Search onSearch={console.log} />;
  const menuItemRender = (item: any, dom: any) => (
    <a
      onClick={() => {
        setPathname(item.path || '/');
      }}
    >
      {dom}
    </a>
  );
  const menuFooterRender = (props: any) => (
    <a
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 48,
        lineHeight: '48rpx',
        color: 'rgba(255, 255, 255, 0.65)',
      }}
      href="#"
    >
      <img
        alt="pro-logo"
        src="https://procomponents.ant.design/favicon.ico"
        style={{ width: 16, height: 16, margin: '0 10px 0 16px' }}
      />
      {!props?.collapsed && 'Preview Pro'}
    </a>
  );
  const rightContentRender = () => (
    <div>
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  );
  const footerRender = () => <DefaultFooter copyright="2010-2020" />;

  return (
    <div id="ant-design-pro-layout">
      <ProLayout
        title="React Awesome"
        logo="/assets/react.ico"
        style={{
          minHeight: '100vh',
          transform: 'rotate(0)',
          overflowX: 'hidden',
        }}
        route={route}
        location={{ pathname }}
        onMenuHeaderClick={e => console.log(e.target)}
        menuExtraRender={menuExtraRender}
        menuItemRender={menuItemRender}
        // menuFooterRender={menuFooterRender}
        rightContentRender={rightContentRender}
        footerRender={footerRender}
        // layout="top"
        // splitMenus
        {...settings}
      >
        <PageContainer
          extra="Extra"
          content="Content"
          extraContent="ExtraContent"
          tabList={[
            { key: 'base', tab: '基本信息' },
            { key: 'info', tab: '详细信息' },
          ]}
          // footer={[
          //   <Button key="reset" type="default">
          //     重置
          //   </Button>,
          //   <Button key="submit" type="primary">
          //     提交
          //   </Button>,
          // ]}
          fixedHeader={false}
        >
          <div>
            <Result
              status="404"
              title="Hello, World!"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        hideHintAlert
        getContainer={() => document.getElementById('ant-design-pro-layout')}
        settings={settings}
        onSettingChange={e => {
          console.log(e);
          setSetting(e);
        }}
      />
    </div>
  );
};

export default Layout;
