import React from "react"
import Toggle from "../Toggle/index"
import useToggle from "../../hooks/useToggle"

const MenuContext = React.createContext()

export default function Menu({ children, onOpen }) {
    /**
 * Challenge:
 * 3. Create context (MenuContext). Make sure to export
 *    it so we can access it in the other Menu components!
 *    (Will be a named export, not default export).
 * 4. Wrap the div below with the context provider
 * 5. What do you think we should pass as the values
 *    to the provider? 🤔
 */

    const [open, toggleOpen] = useToggle(false)

    return (
        <>
            <MenuContext.Provider value={{ open, toggleOpen }}>
                <div className="menu">
                    {children}
                </div>
            </MenuContext.Provider>
        </>
    )
}

export { MenuContext }
