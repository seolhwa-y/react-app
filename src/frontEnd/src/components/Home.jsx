import React, { useEffect, useState } from 'react';
import axios from 'axios'; // api 통신

const Home = () => {
    let [data, setData] = useState('');
    // 서버 연동 확인 START
    useEffect(() => {
        // axios // RestAPI 활용해서 데이터 가져오기
        //     .get('/api/hello')
        //     .then((response) => {
        //         console.log('response', response.data);
        //         setData(response.data);
        //     })
        //     .catch((error) => console.log(error));
    }, []);
    // 서버 연동 확인 END

    return (
        <div>
            <h1>홈</h1>
            <hr />
            {/* 서버연결 테스트 */}
            <p>백엔드에서 가져온 데이터입니다 : {data}</p>
        </div>
    );
};

export default Home;
