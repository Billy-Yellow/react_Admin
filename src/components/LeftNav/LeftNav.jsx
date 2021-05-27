import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Menu} from 'antd';
// import {
//     PieChartOutlined,
//     UserOutlined,
//   } from '@ant-design/icons';

import './LeftNav.less'
import logo from '../../assets/images/logo.png';
import menuList from '../../config/menuconfig';
// import { render } from '@testing-library/react';
const { SubMenu } = Menu;

class LeftNav extends Component {
    
    getMenuNodes = (menuList)=>{
        const path = this.props.location.pathname
        return menuList.map(item=>{
            if(!item.children){
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
                const cItem = item.children.find(cItem=>cItem.key===path)
                if(cItem){
                    this.openKey = item.key
                }
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title} >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

// this componentWillMount only run one time before render(), it could prepare data for the first render() and it is sync
    componentWillMount(){
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render() {
        const path = this.props.location.pathname
        const openKey = this.openKey
        return (
            <dev to='/' className="left-nav">
                <Link className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>React Back</h1>
                </Link>

                <Menu theme="dark" selectedKeys={[path]}  mode="inline" defaultOpenKeys={[openKey]}>
                {
                    this.menuNodes
                }
                </Menu>
            </dev>
        )
    }
}

export default withRouter(LeftNav)