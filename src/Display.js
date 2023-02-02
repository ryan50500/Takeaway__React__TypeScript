import React from 'react'
import Images from './Images.js'
import {useState} from 'react'

const Display = ({modal, setModal, setIndex}) => {
    const handleClick = (id) => {
        setIndex(id)
        setModal(!modal)
    }
    return (
        <>
        <div className="images__flex">
           {Images.map((image) => {
               return (
                <div key={image.id} className="holder">
                    <h3 className="dish__name">{image.dishName}</h3>
                    <img className={image.class} src={image.image} onClick={()=>handleClick(image.id)}/>
                </div>
               )
           })}
        </div>
        {/* image overlay */}
        <div className={modal ? 'images__overlay' : "images__overlay hide"}></div>
        </>
    )
}

export default Display;