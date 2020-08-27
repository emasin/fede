import React from 'react';

import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {Link, Route } from 'react-router-dom';
import {Layout,Menu,Breadcrumb} from "antd";
import Contents from './container/content-container.js';
import Tutor from './container/tutor-container.js';
import Login from './component/login';
import Detail from "./component/topics-detail";
import 'antd/dist/antd.css';

const {Header,Footer,Sider,Content} = Layout;
function App() {
  return (
      <div className="">
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to='/home'>강의 목록</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to='/tutors'>튜터 목록</Link>
              </Menu.Item>

              <Menu.Item key="5">
                <Link to='/login'>로그인</Link>
              </Menu.Item>

            </Menu>
          </Header>
          <Layout>
            <Content>

              <Route path="/tutors" component={Tutor} />
              <Route path="/home" component={Contents} />


              <Route path="/login" component={Login} />

              <Route path="/react/detail/:name" component={Detail} />
            </Content>
          </Layout>
        </Layout>
      </div>
  );
}

export default App;
