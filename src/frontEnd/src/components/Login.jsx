import React, { useEffect, useState } from 'react';
import axios from 'axios'; // api 통신
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    let params = new URLSearchParams(values);

    axios // RestAPI 활용해서 데이터 가져오기
        .post('/api/loginProc.do', params)
        .then((response) => {
            console.log('response', response.data);
            console.log('usrMnuAtrt : ', response.data.usrMnuAtrt);
        })
        .catch((error) => console.log(error));
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    return (
        <div>
            <h1>로그인</h1>
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
                            message: '아이디를 입렧해주세요.',
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
        </div>
    );
};

export default Login;
