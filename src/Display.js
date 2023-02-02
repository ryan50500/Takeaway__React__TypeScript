import React from 'react'
import Images from './Images.js'
import {useState} from 'react'

const Display = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="images__flex">
           {Images.map((image) => {
               return (
                <div key={image.id} className="holder">
                    <img className={image.class} src={image.image} onClick={()=> setIndex(image.id)}/>
                </div>
               )
           })}
        </div>
    )
}

export default Display;