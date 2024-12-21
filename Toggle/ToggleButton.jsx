import React, { Children } from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleButton({ children }) {
    /**
     * Challenge:
     *
     * 1. Create a ToggleButton component
     * 2. Receive the `toggle` function from context (2 parts!)
     * 3. Render a div with an onClick that calls `toggle`
     *    - also renders children
     */

    const context = React.useContext(ToggleContext);

    return <div onClick={context.toggle}>{children}</div>;
}
