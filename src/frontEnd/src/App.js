import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // NavLink -> Link로 변경
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import './App.css';
import store from './store.js';
import {
    Login,
    Home,
    Notice,
    MyPage,
    Basic,
    Diary,
    ToDoList,
    SamplePage,
    Pokemon,
} from './components/index';

const { Header, Content, Sider } = Layout;

const menuItems = [
    { url: '/', name: '로그인', component: Login },
    { url: '/Home', name: '홈', component: Home },
    { url: '/Basic', name: '생활코딩', component: Basic },
    { url: '/Notice', name: '공지사항', component: Notice },
    { url: '/Diary', name: '다이어리', component: Diary },
    { url: '/ToDoList', name: '투두리스트', component: ToDoList },
    { url: '/SamplePage', name: '샘플페이지', component: SamplePage },
    { url: '/MyPage', name: '마이페이지', component: MyPage },
    { url: '/Pokemon', name: '포켓몬', component: Pokemon },
];

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {menuItems.map((menuItem, index) => (
                    <p key={index}>
                        <Link to={menuItem.url}>{menuItem.name}</Link>{' '}
                        {/* NavLink -> Link로 변경 */}
                    </p>
                ))}
            </Sider>

            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Routes>
                        {menuItems.map((menuItem, index) => (
                            <Route
                                exact
                                key={index}
                                path={menuItem.url}
                                element={<menuItem.component />}
                            />
                        ))}
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
