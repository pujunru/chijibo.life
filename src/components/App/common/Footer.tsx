import React from 'react'

import { Menu, Icon } from 'antd'

const Footer: React.FC = () => {
    return (
        <Menu mode='horizontal'>
            <Menu.Item key='fooder'>
                <Icon type='home' theme="twoTone" />
                fooder
            </Menu.Item>
            <Menu.Item key='discover'>
                <Icon type="fire" theme="twoTone" />
                discover
            </Menu.Item>
            <Menu.Item key='me'>
                <Icon type="smile" theme="twoTone" />
                me
            </Menu.Item>
        </Menu>
    )
}

export default Footer