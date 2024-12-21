import React from "react"

export default function Toggle({ children }) {

    const [toggled, setToggled] = React.useState(false)

    function toggle() {
        setToggled((prevState => {
            return !prevState
        }))
    }

    return (
        <>
            {children}
        </>
    )
}

