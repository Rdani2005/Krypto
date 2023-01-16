import React from 'react'

const Circle = ({top, color, xPosition}) => {
    return (
        <div className={`absolute ${top} ${xPosition} w-[200px] md:w-[500px] h-[200px] md:h-[500px] ${color} z-[-10] rounded-full blur-[200px]`}></div>
    )
}

export default Circle