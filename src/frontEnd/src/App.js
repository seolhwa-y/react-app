import React, { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom'; // version 6 :: 페이지 이동
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    //     UserOutlined,
    //     FileOutlined,
    //     PieChartOutlined,
    //     TeamOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Home, Notice, MyPage, Basic, Diary, ToDoList, SamplePage } from './components';

const { Header, Content, Sider } = Layout;

const menuItems = [
    { url: '/', name: '홈', component: Home },
    { url: '/Basic', name: '생활코딩', component: Basic },
    { url: '/Notice', name: '공지사항', component: Notice },
    { url: '/Diary', name: '다이어리', component: Diary },
    { url: '/ToDoList', name: '투두리스트', component: ToDoList },
    { url: '/SamplePage', name: '샘플페이지', component: SamplePage },
    { url: '/MyPage', name: '마이페이지', component: MyPage },

    // 다른 메뉴들 추가
];

// 화면 로딩 기능 추가
function App() {
    /* package.json 깃허브용 "homepage": "https://seolhwa-y.github.io/react-app", 추가 */

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            {/* 사이드바 메뉴 표기 */}
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}

                {/* 동적으로 메뉴 뿌리기 */}
                {menuItems.map((menuItem, index) => (
                    <p key={index}>
                        <NavLink to={menuItem.url}>{menuItem.name}</NavLink>
                    </p>
                ))}
            </Sider>

            <Layout>
                {/* 헤더 */}
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

                {/* 본문 */}
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <img src={logo} className="App-logo" alt="logo" />

                    {/* 라우터 version 6 */}
                    <Routes>
                        {menuItems.map((menuItem, index) => (
                            <Route
                                key={index}
                                path={menuItem.url}
                                // component={<menuItem.component />} // version 6 이전
                                element={<menuItem.component />} // version 6
                            />
                        ))}
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
