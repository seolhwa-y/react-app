import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Home, Notice, MyPage, Basic } from './components';
// import Home from './Page/Home'; // 홈
// import Notice from './Page/Notice'; // 공지사항
// import MyPage from './Page/MyPage'; // 마이페이지
// import Basic from './CodingForLife/Basic'; // 생활코딩
// import '../styles/common/Nav.css';

const Nav = () => {
    return (
        <nav>
            <h2>
                <NavLink to="/">홈</NavLink>
            </h2>
            <h2>
                <NavLink to="/notice">공지사항</NavLink>
            </h2>
            <h2>
                <NavLink to="/basic">생코</NavLink>
            </h2>
            <h2>
                <NavLink to="/mypage">MyPage(미개발)</NavLink>
            </h2>
        </nav>
    );
};

export default Nav;
