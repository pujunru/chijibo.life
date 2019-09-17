import React from 'react'
import Layout from '../common/Layout'
import { WingBlank } from 'antd-mobile'
import PlaceHolder from '../common/_dev/PlaceHolder/PlaceHolder'

const HomePage: React.FC = () => {
    return (
        <Layout hideHeader>
            <WingBlank size="md"><PlaceHolder /></WingBlank>
        </Layout>
    )
}

export default HomePage