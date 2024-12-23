import React from "react"
import { useEffect, useRef } from "react"

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle = () => { } }) {

    const [on, setOn] = React.useState(false)


    const firstRender = useRef(true)


    function toggle() {
        setOn(prevOn => !prevOn)
    }

    useEffect(() => {
        if (firstRender.current === true) {
            firstRender.current = false
        } else {
            onToggle()
        }
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }