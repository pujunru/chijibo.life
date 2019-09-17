import React, { useState } from 'react'

// import { Menu, Icon } from 'antd'
import { TabBar, Icon } from 'antd-mobile'



const Dock: React.FC = (props) => {

    const viewList: string[] = ['fooder', 'discover', 'me']
    const [selectedTab, setSelectedTab] = useState(0)  // int index

    return (
        // <Menu mode='horizontal'>
        //     <Menu.Item key='fooder'>
        //         <Icon type='home' theme="twoTone" />
        //         fooder
        //     </Menu.Item>
        //     <Menu.Item key='discover'>
        //         <Icon type="fire" theme="twoTone" />
        //         discover
        //     </Menu.Item>
        //     <Menu.Item key='me'>
        //         <Icon type="smile" theme="twoTone" />
        //         me
        //     </Menu.Item>
        // </Menu>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar >
                <TabBar.Item
                    title={viewList[0]}
                    key={viewList[0]}
                    icon={<Icon type='loading' />}
                    selected={selectedTab === 0}
                    onPress={() => {
                        setSelectedTab(0)
                        props.history.push('home')
                    }}
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />}
                />
                <TabBar.Item
                    title={viewList[1]}
                    key={viewList[1]}
                    icon={<Icon type='loading' />}
                    selected={selectedTab === 1}
                    onPress={() => setSelectedTab(1)}
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                />
                <TabBar.Item
                    title={viewList[2]}
                    key={viewList[2]}
                    icon={<Icon type='loading' />}
                    selected={selectedTab === 2}
                    onPress={() => setSelectedTab(2)}
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                />
            </TabBar>
        </div>
    )
}

export default Dock