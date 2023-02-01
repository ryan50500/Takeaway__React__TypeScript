import React from 'react'
import MyArray from './MyArray.js'
import { useState } from "react";

const App = () => {

        const handleTheClick = (e) => {
            // setColor("yellow")
            if (e.target.className === MyArray[0].name) {
                console.log('its steve!');
                }
            }

   const [color, setColor] = useState('green')
    return (
        <div>
           {MyArray.map((obj) => {
               return (
                <div key={obj.id}>
                    <h2>{obj.name}</h2>
                    <button className={obj.name}  onClick={handleTheClick}>CLICK ME</button>
                </div>
               )
           })}
        </div>
    )
}

export default App
