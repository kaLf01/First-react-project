import logo from './logo.svg';
import './App.css';
// import myCard from './componants/card/myCard'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Card } from 'antd';
import Card2 from './componants/card/myCard2'
import myCalendar from './componants/calandar/Calandar'
import React,{ useState } from 'react';



function App() {
  const { Header, Content, Footer } = Layout;

  const[activeTap,setActiveTap] = useState(Card2);

  const switchTap = (e) => {
    switch (e.key) {
      case 'profile':
          
        break;
      case 'cards':
        setActiveTap(Card2)
        break;
      case 'calandar':
        setActiveTap(myCalendar)
        break;
      case 'setting':

        break;

      default:
        break;
    }
  }
  return (
    <div>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu onClick={switchTap} theme="dark" mode="horizontal" defaultSelectedKeys={['cards']}>
            <Menu.Item key="profile">Profile</Menu.Item>
            <Menu.Item key="calandar">Calandar</Menu.Item>
            <Menu.Item key="cards">Cards</Menu.Item>
            <Menu.Item key="settings">Settings</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            {activeTap}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
    </div>
  );
}

export default App;
