import React from "react"
import { storiesOf } from "@storybook/react"
import InputCard from "../components/App/common/InputCard"

const task = {
  title: "Email",
  placeHolder: "example@fooder.today",
  validator: (value: string) => {
    if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return "Invalid email format."
    }
    return null;
  },
}

storiesOf("Component", module)
.add("InputCard", () => (
    <div>
        <InputCard {...task} />
        <InputCard {...task} title="Password" />
    </div>
))
