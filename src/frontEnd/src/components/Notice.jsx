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
            <h1>공지사항</h1>
            <hr />
            <p>이곳은 공지사항 입니다.</p>
        </div>
    );
};

export default About;
