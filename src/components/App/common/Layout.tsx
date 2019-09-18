import React from 'react'

import Footer from './Dock'
import PlaceHolder from './_dev/PlaceHolder/PlaceHolder'
import { WingBlank } from 'antd-mobile'
import { withRouter } from 'react-router'

interface Props {
    hideHeader?: boolean;
    hideFooter?: boolean;
}

const Layout: React.FC<Props> = ({ children, hideHeader = false, hideFooter = false}) => {
    let header = (
        <div>
            <WingBlank>
                <PlaceHolder />
            </WingBlank>
        </div>
    )

    let footer = (
        <div>
            <Footer />
        </div>
    )
    return (
        <div>
            {!hideHeader && header}
            <div>{children}</div>
            {!hideFooter && footer}
        </div>
    )
}

export default Layout