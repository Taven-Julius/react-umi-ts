import { history } from 'umi';
import { Breadcrumb, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import './index.less'
import React from 'react';

// 路由文件
import Router from '@/routes/menu'

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = Router.map(item => {
  return {
    key: item.path,
    label: item.meta.title,
    children: item.routes?.map(_ => {
      return {
        key: _.path,
        label: _.meta.title
      }
    })
  };
},
);

const menuClick: MenuProps['onClick'] = (e) => {
  console.log(e);

  history.push(e.key)
}

const App: React.FC = (props) => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          onClick={menuClick}
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
          theme="dark"
        />
      </Sider>
      <Layout style={{ padding: '20px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 20,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;