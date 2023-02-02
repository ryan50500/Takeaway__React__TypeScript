import React from 'react'
import Images from './Images.js'
import {useState} from 'react'

const Display = ({modal, setModal}) => {
    const [index, setIndex] = useState(0)
    const handleClick = (id) => {
        setIndex(id)
        setModal(!modal)
    }
    return (
        <div className="images__flex">
           {Images.map((image) => {
               return (
                <div key={image.id} className="holder">
                    <img className={image.class} src={image.image} onClick={()=>handleClick(image.id)}/>
                </div>
               )
           })}
        </div>
    )
}

export default Display;