import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/LeftNav/LeftNav';
import Header from '../../components/Header/Header';

const {Footer, Sider, Content } = Layout;

export default class admin extends Component {
    render() {
        const user = memoryUtils.user
        if(!user || !user._id){
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor:'#fff'}}>Content</Content>
                    <Footer style={{textAlign:'center', color:'#'}}>I use FireFox, please make sure of that</Footer>
                </Layout>
            </Layout>
        )
    }
}
