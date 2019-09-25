import React, { useState } from "react"
import { List, InputItem, Toast } from "antd-mobile"
import { InputItemPropsType } from "antd-mobile/lib/input-item/PropsType"

import './InputCard.module.css'

interface Props extends Pick<InputItemPropsType, "type"> {
  title: string
  addonTitle?: string
  placeHolder?: string
  validator?: (value: string) => string | null
}

const InputCard: React.FC<Props> = ({
  title,
  addonTitle,
  placeHolder,
  type,
  validator,
}) => {
  const [value, setValue] = useState("")
  const [errMsg, setErrMsg] = useState<string | null>(null)

  const onErrorClickHandler = () => {
    if (errMsg) {
      Toast.info(errMsg)
    }
  }

  const onChangeHandler = (v: string) => {
    if (typeof validator === "function") {
      let res = validator(v)
      if (res) {
        setErrMsg(res)
      } else {
          setErrMsg(null)
      }
    }

    setValue(v)
  }

  return (
    <div className="box">
      <List>
        <InputItem value={title} editable={false} />
        <InputItem
          placeholder={placeHolder}
          type={type}
          error={!!errMsg}
          onErrorClick={onErrorClickHandler}
          onChange={onChangeHandler}
        >
          {addonTitle}
        </InputItem>
      </List>
    </div>
  )
}

export default InputCard
