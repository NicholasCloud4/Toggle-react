import React, { useEffect, useRef } from "react"

export default function useEffectOnUpdate(effectFunction, dependencies) {

    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current === true) {
            firstRender.current = false
        } else {
            effectFunction()
        }
    }, dependencies)

}

/**
 * Mini-quiz:
 * What are the 2 parameters in React.useEffect?
 * 1. Callback function
 * 2. Array of dependencies
 * 
 * Mini-challenge:
 * Update our custom hook function to accept
 * the same parameters we talked about above
 */

/**
 * Mini-challenge:
 * Update the code to use our hook's parameters
 * instead of the values from the Toggle component
 */