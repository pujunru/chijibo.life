import React, { ReactElement } from 'react'
import { NavBar } from 'antd-mobile'

interface PropsType {
    icon?: string;
    onLeftClick?(): void;
    leftContent?: ReactElement | string;
    rightContent?: ReactElement | string;
    title?: ReactElement | string;
}


const Nav: React.FC<PropsType> = ({
    icon,
    onLeftClick,
    leftContent,
    rightContent,
    title
    }) => {
    return (
        <NavBar
            mode="light"
            icon={icon}
            onLeftClick={onLeftClick}
            leftContent={leftContent}
            rightContent={rightContent}
        >{title}</NavBar>
    )
}

export default Nav