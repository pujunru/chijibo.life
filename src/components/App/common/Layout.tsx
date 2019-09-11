import React from 'react'

import { Layout as AntLayout } from 'antd'
import Footer from './Footer'

const { "Header": AntHeader, "Content": AntContent, "Footer": AntFooter } = AntLayout

interface Props {
    hideHeader?: boolean;
    hideFooter?: boolean;
}

const Layout: React.FC<Props> = ({ children, hideHeader = false, hideFooter = false }) => {
    let footer = (
        <AntFooter>
            <Footer />
        </AntFooter>
    )
    return (
        <AntLayout>
            {!hideHeader && <AntHeader />}
            <AntContent>{children}</AntContent>
            {!hideFooter && footer}
        </AntLayout>
    )
}

export default Layout