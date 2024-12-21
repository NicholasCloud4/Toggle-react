import React from 'react'
import { ToggleContext } from './Toggle';

export default function ToggleOff({ children }) {

    const context = React.useContext(ToggleContext);

    if (context.on === false) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return null
    }
}
