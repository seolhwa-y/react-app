import React, { useEffect, useState } from 'react';
import axios from 'axios'; // api 통신
import { Divider, Table } from 'antd';

const Notice = () => {
    const columns = [
        {
            title: 'No',
            dataIndex: 'noticeNo',
            key: 'noticeNo',
        },
        {
            title: '제목',
            dataIndex: 'noticeTitle',
            key: 'noticeNo',
        },
        {
            title: '작성자',
            dataIndex: 'loginName',
            key: 'noticeNo',
        },
        {
            title: '작성일자',
            dataIndex: 'noticeRegdate',
            key: 'noticeNo',
        },
    ];

    const [data, setData] = useState([
        {
            key: '1',
            noticeNo: '1',
            loginName: 'John Brown',
            noticeRegdate: 32,
            noticeTitle: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            noticeNo: '2',
            loginName: 'Jim Green',
            noticeRegdate: 42,
            noticeTitle: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            noticeNo: '3',
            loginName: 'Joe Black',
            noticeRegdate: 32,
            noticeTitle: 'Sydney No. 1 Lake Park',
        },
    ]);

    useEffect(() => {
        axios // RestAPI 활용해서 데이터 가져오기
            .get('/api/noticeList.do', { params: { currentPage: '1', pageSize: '10' } })
            .then((response) => {
                console.log('response', response.data);
                console.log('notice : ', response.data.notice);
                setData(response.data.notice);

                //setHello(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Divider>
                <h1>공지사항</h1>
            </Divider>
            <Table columns={columns} dataSource={data} size="middle" />
        </>
    );
};

export default Notice;
