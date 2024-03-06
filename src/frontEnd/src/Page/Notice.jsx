import React, { useEffect } from 'react';
import axios from 'axios'; // api 통신

const About = () => {
    useEffect(() => {
        axios // RestAPI 활용해서 데이터 가져오기
            .get('/api/noticeList.do', { params: { currentPage: '1', pageSize: '10' } })
            .then((response) => {
                console.log('response', response.data);
                //setHello(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
        </div>
    );
};

export default About;
