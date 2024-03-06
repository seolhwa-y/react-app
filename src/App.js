import React, { useEffect, useState } from 'react';
import axios from 'axios'; // api 통신
import { Route, Routes } from 'react-router-dom'; // version 6 :: 페이지 이동
import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import Notice from './Page/Notice';
import MyPage from './Page/MyPage';
import Basic from './CodingForLife/Basic'; // 생활코딩
import Nav from './components/Nav'; // MENU

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

    return (
        <div className="App App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>백엔드에서 가져온 데이터입니다 : {hello}</div>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/basic" element={<Basic />} />
                <Route path="/mypage" element={<MyPage />} />
            </Routes>
        </div>
    );
}

export default App;
