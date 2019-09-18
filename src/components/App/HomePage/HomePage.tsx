import React from 'react'
import Layout from '../common/Layout'
import { WingBlank } from 'antd-mobile'
import PlaceHolder from '../common/_dev/PlaceHolder/PlaceHolder'
import HomeRoute from './Route'

const HomePage: React.FC = (props) => {
    return (
        <Layout hideHeader>
            <WingBlank size="md">
                <HomeRoute />
            </WingBlank>
        </Layout>
    )
}

export default HomePage