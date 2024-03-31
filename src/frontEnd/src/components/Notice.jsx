import React, { useEffect, useState } from 'react';
import axios from 'axios'; // api 통신
import { Divider, Table, Button, Drawer, Space } from 'antd';

const Notice = () => {
    const [open, setOpen] = useState(false); // 공지사항 상세내용 열기
    const [selectedNotice, setSelectedNotice] = useState(null); // 공지사항 상세내용 통신용

    // 공지사항 테이블 컬럼
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

    // 공지사항 데이터 저장
    const [data, setData] = useState([]);

    // 공지사항 상세보기
    const showNoticeDetail = (record) => {
        setSelectedNotice(record);
        setOpen(true);
    };

    // 공지사항 목록 가져오기
    useEffect(() => {
        axios
            .get('/api/noticeList.do', { params: { currentPage: '1', pageSize: '10' } })
            .then((response) => {
                setData(response.data.notice);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Divider>
                <h1>공지사항</h1>
            </Divider>

            {/* 공지상항 기본 테이블 */}
            <Table
                columns={columns}
                dataSource={data}
                size="middle"
                onRow={(record) => ({ onClick: () => showNoticeDetail(record) })}
            />

            {/* 공지사항 상세내용 */}
            <Drawer
                title={selectedNotice ? selectedNotice.noticeTitle : ''}
                placement="bottom"
                width={500}
                onClose={() => setOpen(false)}
                visible={open}
                footer={
                    <Space>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="primary" onClick={() => setOpen(false)}>
                            OK
                        </Button>
                    </Space>
                }>
                {selectedNotice && (
                    <>
                        <p>No: {selectedNotice.noticeNo}</p>
                        <p>Title: {selectedNotice.noticeTitle}</p>
                        <p>Author: {selectedNotice.loginName}</p>
                        <p>Date: {selectedNotice.noticeRegdate}</p>
                    </>
                )}
            </Drawer>
        </>
    );
};

export default Notice;
