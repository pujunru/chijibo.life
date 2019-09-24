import React, { useState } from "react"

import { InputItem, InputItemPropsType, Button, WingBlank, List } from "antd-mobile"

interface Props {
    title: string;
    inputType: any
}

const InputCard: React.FC<Props> = ({title, inputType}) => {
    return (
        <div>
            <List>
                <div>{title}</div>
                <InputItem
                    placeholder="example@fooder.today"
                    type={inputType}
                
                ></InputItem>
            </List>
        </div>
    )
}

const LoginPage: React.FC = () => {
    return (
        <div></div>
    )
}

export default LoginPage
