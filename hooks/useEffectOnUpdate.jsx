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
