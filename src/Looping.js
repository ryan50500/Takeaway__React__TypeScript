import React from 'react'
import MyArray from './MyArray.js'

const Looping = () => {
    return (
        <div>
           {MyArray.map((obj) => {
               return (
                    <h2>{obj.name}</h2>
               )
           })}
        </div>
    )
}

export default Looping
