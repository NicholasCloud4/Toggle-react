import React, { Children } from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleButton({ children }) {

    const context = React.useContext(ToggleContext);

    return <div onClick={context.toggle}>{children}</div>;
}
