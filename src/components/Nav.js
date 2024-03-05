import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../styles/common/Nav.css';

const Nav = () => {
    return (
        <nav>
            <h2>
                <NavLink to="/">홈</NavLink>
            </h2>
            <h2>
                <NavLink to="/about">소개</NavLink>
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
