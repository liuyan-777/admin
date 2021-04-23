import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import logo from './images/logo.png'
import './login.css'
export default class Login extends Component {
    handleSubmit = (e) => {

    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目.后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onSubmit={this.handleSubmit}>
                        <Form.Item>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" onClick={this.onFinish} className="login-form-button" >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

