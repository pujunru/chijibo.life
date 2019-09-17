import React, { useState } from 'react'

// import { Menu, Icon } from 'antd'
import { TabBar, Icon } from 'antd-mobile'

const Dock: React.FC = () => {

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
                <TabBar.Item title={viewList[0]} key={viewList[0]} icon={<Icon type='loading' />} />
                <TabBar.Item title={viewList[1]} key={viewList[1]} icon={<Icon type='loading' />} />
                <TabBar.Item title={viewList[2]} key={viewList[2]} icon={<Icon type='loading' />} />
            </TabBar>
        </div>
    )
}

export default Dock