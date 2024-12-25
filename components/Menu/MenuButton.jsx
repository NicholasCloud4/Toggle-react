import React from "react"
import Button from "../Button/Button"
import Toggle from "../Toggle/index"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }) {

    const context = React.useContext(MenuContext)
    return (
        <Button onClick={context.toggleOpen}>{children}</Button>
    )
}