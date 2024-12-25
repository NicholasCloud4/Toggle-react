import React from "react"
import Toggle from "../Toggle/index"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {

    const context = React.useContext(MenuContext)

    if (context.open === true) {
        return (
            <div className="menu-dropdown">
                {children}
            </div>
        )
    } else {
        return undefined
    }
}