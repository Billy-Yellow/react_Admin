import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

import './LeftNav.less'
import logo from '../../assets/images/logo.png';
const { SubMenu } = Menu;

export default class LeftNav extends Component {
    render() {
        return (
            <dev to='/' className="left-nav">
                <Link className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>React Back</h1>
                </Link>

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="0" icon={<PieChartOutlined />}>
                    Home Page
                    </Menu.Item>

                    <SubMenu key="sub1" icon={<UserOutlined />} title="Mail">
                        <Menu.Item key="3" icon={<UserOutlined />}>Category Management</Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>Good Managent</Menu.Item>
                    </SubMenu>
                    
                    
                </Menu>
            </dev>
        )
    }
}
