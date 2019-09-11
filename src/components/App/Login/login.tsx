import React from 'react'

import Layout from '../common/Layout'
import { Menu, Input, Button } from 'antd'

const Login: React.FC = () => {
    return (
        <Layout hideHeader hideFooter>
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key='register'>
                        ...
                    </Menu.Item>
                    <Menu.Item key='login'>
                        ...
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                <Input addonBefore='email :' defaultValue='your email address' />
                <Input.Password addonBefore='password :' />
            </div>

            <div>
                <Button type='primary'>Register Now</Button>
                <Button type='danger'>As Visitor</Button>
            </div>
        </Layout>
    )
}

export default Login