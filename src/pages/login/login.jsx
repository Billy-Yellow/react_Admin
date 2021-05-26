import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Form, Input, Button, message} from 'antd';
import { UserOutlined , LockOutlined } from '@ant-design/icons';


import './login.less';
import logo from '../../assets/images/logo.png';
import {reqLogin} from '../../api';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';



export default class login extends Component {

    onFinish = () => {
        return async (values)=>{
            // console.log('Received values of form: ', values);
            const {username,password} = values;
            const result = await reqLogin(username, password);
            // const result = response.data;
            // console.log('request success',result);
            if(result.status===0){
                message.success("login success")
                //save user
                const user = result.data 
                memoryUtils.user = user
                storageUtils.saveUser(user)
                //we don't need to retreat to the login page
                this.props.history.replace('/')
            }else{
                message.error(result.msg)
            }
        }
    };

    validatorPwd = () =>{
        return (rules, value)=>{
            console.log('validatePwd()', rules, value);
            if(!value) {
                return Promise.reject(new Error('password must be input'));
              } else if (value.length<4) {
                return Promise.reject(new Error('length need to larger than 4'));
              } else if (value.length>12) {
                return Promise.reject(new Error('length need to shorter than 12'));
              } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                return Promise.reject(new Error('password must be consist of 0-9, a-z A-Z _'));
              } else {
                return Promise.resolve();
              }
        }
    };

    render() {

        const user = memoryUtils.user
        if(user && user._id){
            return <Redirect to='/'/>
        }

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React project</h1>
                </header>
                <section className="login-content">
                    <h2>user login</h2>
                    <Form name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={this.onFinish()}>

                    <Form.Item name="username"  className="login-form-login" 
                        rules={[
                            {required: true, message: 'Please input your name',},
                            {min:4, message: 'at least 4'},
                            {max:12, message: 'at most 12'},
                            {pattern: /^[a-zA-Z0-9_]+$/, message: 'must be consist of 0-9, a-z A-Z _'},
                            ]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <br />
                    <Form.Item name="password" className="login-form-password" rules={[{
                        validator:this.validatorPwd()
                        }]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password" placeholder="Password"/>
                    </Form.Item>
                    <br />
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                    </Form.Item>

                    </Form>
                </section>
            </div>
        )
    }
}
