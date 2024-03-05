import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // version 6
import Home from './Page/Home';
import About from './Page/About';
import MyPage from './Page/MyPage';
import Basic from './CodingForLife/Basic'; // 생활코딩
import Nav from './components/Nav'; // MENU

// 화면 로딩 기능 추가
function App() {
    return (
        <div className="App App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/basic" element={<Basic />} />
                <Route path="/mypage" element={<MyPage />} />
            </Routes>
        </div>
    );
}

export default App;
