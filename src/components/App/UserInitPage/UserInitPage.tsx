import React from 'react'

import { Row, Col, Button } from 'antd'
import Layout from '../common/Layout'

const MockFoodCategory = [
    'Chinese Food',
    'Mexican Food',
    'Dessert',
    'Fast Food',
    'Seafood',
]

const MockFoodType = [
    'Spicy',
    'Dim sum',
    'Burger',
    'Pizza',
    'Noodle'
]

const UserInitPage: React.FC = () => {
    return (
        <Layout hideFooter hideHeader>
            <Row>
                {MockFoodCategory.map((tabName: string) => 
                    <Col span={8}>
                        <Button type='dashed'>
                            {tabName}
                        </Button>
                    </Col>
                    )}
            </Row>
        </Layout>
    )
}

export default UserInitPage