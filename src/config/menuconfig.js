import {
    PieChartOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const menuList = [
    {
        title: 'Home Page',
        key:'/home',
        icon:<UserOutlined/>,
    },
    {
        title:'Good Page',
        key:'/good',
        icon:<UserOutlined/>,
        children:[
            {
                title:'Category Page',
                key:'/category',
                icon:<PieChartOutlined/>,
            },
            {
                title:'Product Page',
                key:'/Product',
                icon:<PieChartOutlined/>,
            },
        ]
    },
    {
        title: 'User Page',
        key:'/user',
        icon:<UserOutlined/>,
    },
    {
        title: 'Role Page',
        key:'/role',
        icon:<UserOutlined/>,
    },
    {
        title:'Charts Page',
        key:'/charts',
        icon:<UserOutlined/>,
        children:[
            {
                title:'Bars Page',
                key:'/charts/bar',
                icon:<PieChartOutlined/>,
            },
            {
                title:'Line Page',
                key:'/charts/line',
                icon:<PieChartOutlined/>,
            },
            {
                title:'Pie Page',
                key:'/charts/pie',
                icon:<PieChartOutlined/>,
            },
        ]
    },
]

export default menuList