import React, { useEffect, useState } from 'react';
import axios from 'axios'; // api 통신

const Home = () => {
    // 서버 연동 확인 START
    // const [hello, setHello] = useState(''); // 서버 데이터 확인 테스트용
    const [link, setLink] = useState('');
    const [name, setName] = useState('');

    // const navigete = useNavigate();

    useEffect(() => {
        axios // RestAPI 활용해서 데이터 가져오기
            .get('/api/hello')
            .then((response) => {
                console.log('response', response.data);
                console.log('usrMnuAtrt', response.data.usrMnuAtrt);
                let usrMnuAtrt = response.data.usrMnuAtrt;
                let nodeList = '';
                for (let i = 0; i < usrMnuAtrt.length; i++) {
                    nodeList = usrMnuAtrt[i].nodeList;

                    for (let ii = 0; ii < nodeList.length; ii++) {
                        setName(usrMnuAtrt[i].nodeList[ii].mnu_nm);
                        setLink(usrMnuAtrt[i].nodeList[ii].mnu_url.replace('.do', ''));

                        break;
                    }
                }
            })
            .catch((error) => console.log(error));
    }, []);
    // 서버 연동 확인 END

    return (
        <div>
            <h1>홈</h1>
            <hr />
            {/* 서버연결 테스트 */}
            <p>
                백엔드에서 가져온 데이터입니다 (Link / Name): {link} / {name}
            </p>
        </div>
    );
};

export default Home;
