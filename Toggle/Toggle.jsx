import React from "react"

const ToggleContext = React.createContext()

export default function Toggle({ children }) {

    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn((prevState => {
            return !prevState
        }))

    }

    return (
        <>
            <ToggleContext.Provider value={{ on, toggle }}>
                {children}
            </ToggleContext.Provider>
        </>
    )
}

export { ToggleContext }

