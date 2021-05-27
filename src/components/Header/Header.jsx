import React, { Component } from 'react'
import menuList from '../../config/menuconfig'
import {formateDate} from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import {withRouter} from 'react-router-dom'
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import LinkButton from '../LinkButton/LinkButton'
import './Header.less'
import storageUtils from '../../utils/storageUtils'
const { confirm } = Modal


class Header extends Component {

    state = {
        currentTime:formateDate(Date.now()),
    }

    getTime = () => {
        this.intervalId = setInterval(()=>{
            const currentTime = formateDate(Date.now());
            this.setState({currentTime})
        },1000)
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item=>{
            if(item.key===path){
                title = item.title
            }else if(item.children){
                const cItem = item.children.find(cItem => cItem.key===path)
                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title
    }

    logout = () => {
        confirm({
            title: 'Are you sure to log out this account',
            icon: <ExclamationCircleOutlined />,
            // content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk:() => {
              console.log('OK');
              storageUtils.removeUser()
              memoryUtils.user = {}
              this.props.history.replace('/login')
            },
            onCancel() {
              console.log('Cancel');
            },
        });
    }
    // run one time after render()
    componentDidMount(){
        this.getTime()
    }

    // run before this component uninstall
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render() {
        const {currentTime} = this.state
        const username = memoryUtils.user.username
        const title = this.getTitle()
        return (
            <div className="header">
                <div className="header-top">
                    <span>Welcome, {username}</span>
                    <LinkButton onClick={this.logout}> Log Out</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather" />
                        <span>discript</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)