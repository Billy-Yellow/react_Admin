import React, { Component } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/LeftNav/LeftNav';
import Header from '../../components/Header/Header';
import home from '../home/home';
import role from '../role/role';
import category from '../category/category';
import product from '../product/product'
import User from '../user/user';
import bar from '../charts/bar';
import line from '../charts/line';
import pie from '../charts/pie'

const {Footer, Sider, Content } = Layout;

export default class admin extends Component {

    render() {

        const user = memoryUtils.user
        if(!user || !user._id){
            return <Redirect to='/login'/>
        }

        return (
            <Layout style={{height:'100%'}}>
                <Sider >
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20 ,backgroundColor: 'white'}}>
                        <Switch>
                            <Route path='/home' component={home}></Route>
                            <Route path='/category' component={category}></Route>
                            <Route path='/product' component={product}></Route>
                            <Route path='/role' component={role}></Route>
                            <Route path='/user' component={User}></Route>
                            <Route path='/charts/bar' component={bar}></Route>
                            <Route path='/charts/line' component={line}></Route>
                            <Route path='/charts/pie' component={pie}></Route>
                            <Redirect to='/home' ></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center', color:'#'}}>I use FireFox, please make sure of that</Footer>
                </Layout>
            </Layout>
        )
    }
}
