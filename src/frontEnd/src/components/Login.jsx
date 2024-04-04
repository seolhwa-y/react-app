import React, { useState, useEffect } from 'react';
import axios from 'axios'; // api 통신
import { Button, Checkbox, Form, Input, Alert, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import store from '../store.js';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null); // 실패 메시지 상태 추가

    store.dispatch({
        type: 'SET_SESSION_DATA',
        payload: { userInfo: { userId: 'admin', userPwd: '1234' } },
    });
    const currentState = store.getState().sessionData;
    const userInfo = currentState ? currentState.userInfo : null;
    
    if (!userInfo) console.log(userInfo);

    const onFinish = (values) => {
        let params = new URLSearchParams(values);

        axios
            .post('/api/loginProc.do', params)
            .then((response) => {
                const res = response.data;

                console.log('response', response.data);

                if (res.result === 'SUCCESS') {
                    console.log('usrMnuAtrt : ', response.data.usrMnuAtrt);
                    navigate('/Home'); // 페이지 이동
                } else {
                    setError(res.resultMsg); // 실패 시 메세지 설정
                }
            })
            .catch((error) => console.log(error));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setError('로그인에 실패했습니다. 입력된 정보를 확인해주세요.'); // 일반적인 실패 메시지 설정
    };

    useEffect(() => {
        if (userInfo !== null) navigate('/Home'); // 페이지 이동
    }, [userInfo, navigate]);

    return (
        <div>
            <h1>로그인</h1>{' '}
            <p>{/* 백엔드에서 가져온 데이터입니다 (Link / Name): {link} / {name} */}</p>
            <hr />
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item
                    label="UserID"
                    name="lgn_Id"
                    rules={[
                        {
                            required: true,
                            message: '아이디를 입력해주세요.',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="pwd"
                    rules={[
                        {
                            required: true,
                            message: '비밀번호를 입력해주세요.',
                        },
                    ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                    <Checkbox>아이디 기억하기</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                    <Button type="primary" htmlType="submit">
                        로그인
                    </Button>
                </Form.Item>
            </Form>
            {error && ( // 실패 메시지가 있을 경우에만 표시
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Alert description={error} type="error" />
                </Space>
            )}
        </div>
    );
};

export default Login;
