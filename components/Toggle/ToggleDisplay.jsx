import React from 'react'
import { ToggleContext } from './Toggle'

export default function ToggleDisplay({ children }) {

    const context = React.useContext(ToggleContext)


    return (
        <div>{children(context.on)}</div>
    )
}
