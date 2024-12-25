import React from 'react'
import Toggle from './Toggle/index'
import { BsStar, BsStarFill } from 'react-icons/bs'
import useToggle from '../hooks/useToggle'

export default function Star({ onChange }) {
    /**
 * Challenge: Remove all parts of our Toggle component
 * (don't delete the react-icons stars though!) and use 
 * the useToggle hook to conditionally render the stars. 
 * Make sure to add an onClick that runs the `toggle` function
 * you get from useToggle()
 */

    const [on, toggle] = useToggle(false)


    return (
        <div onClick={toggle}>
            {on === true ? <BsStarFill className="star filled" /> : <BsStar className="star" />}
        </div>
    )
}
