import React, { useEffect, useState } from 'react';
import axios from 'axios'; // api 통신
import { Route, Routes } from 'react-router-dom'; // version 6 :: 페이지 이동
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import Notice from './Page/Notice';
import MyPage from './Page/MyPage';
import Basic from './CodingForLife/Basic'; // 생활코딩
import Nav from './components/Nav'; // MENU

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('홈', '1', <PieChartOutlined />),
    getItem('마이페이지', 'sub1', <UserOutlined />, [
        getItem('아직', '3'),
        getItem('개발', '4'),
        getItem('안됨', '5'),
    ]),
    getItem('공지사항', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('생활코딩', '9', <FileOutlined />),
];
// 화면 로딩 기능 추가
function App() {
    /* package.json 깃허브용 "homepage": "https://seolhwa-y.github.io/react-app", 추가 */

    // 서버 연동 확인 START
    const [hello, setHello] = useState(''); // 서버 데이터 확인 테스트용

    useEffect(() => {
        axios // RestAPI 활용해서 데이터 가져오기
            .get('/api/hello')
            .then((response) => {
                console.log('response', response.data);
                setHello(response.data);
            })
            .catch((error) => console.log(error));
    }, []);
    // 서버 연동 확인 END

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                    onClick={(items, key, keyPath, domEvent) => {
                        console.table(items, key, keyPath, domEvent);
                    }}
                />
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
                    Content
                    <img src={logo} className="App-logo" alt="logo" />
                    <div>백엔드에서 가져온 데이터입니다 : {hello}</div>
                    <Nav></Nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/notice" element={<Notice />} />
                        <Route path="/basic" element={<Basic />} />
                        <Route path="/mypage" element={<MyPage />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
        // <div className="App App-header">

        // </div>
    );
}

export default App;
