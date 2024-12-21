import React from 'react'
import { ToggleContext } from './Toggle';



export default function ToggleOn({ children }) {
    const context = React.useContext(ToggleContext);
    if (context.on === true) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return null
    }

}
