import React from "react"
import Toggle from "../Toggle/index"
import useToggle from "../../hooks/useToggle"

export default function Menu({ children, onOpen }) {
    /**
 * Challenge:
 * 1. Remove all references to Toggle in the all 4 Menu
 *    components
 * 2. import and use `useToggle()` to create new state
 *    and toggle functions so we can use those in the Menu.
 *    Call the variables "open" and "toggleOpen".
 * 
 */

    const [open, toggleOpen] = useToggle(false)

    return (
        <div className="menu">
            {children}
        </div>
    )
}
