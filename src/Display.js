import React from 'react'
import Images from './Images.js'
import styles from './Display.module.css'

const Display = ({modal, setModal, setIndex}) => {
    const handleClick = (id) => {
        setIndex(id)
        setModal(!modal)
    }
    return (
        <>
        <div className={styles.images__flex}>
           {Images.map((image) => {
               return (
                <div key={image.id} className={styles.holder}>
                    <h3 className={styles.dish__name}>{image.dishName}</h3>
                    <img src={image.image} onClick={()=>handleClick(image.id)}/>
                </div>
               )
           })}
        </div>
        {/* image overlay */}
        <div className={styles.images__overlay + ' ' + (modal ? ' ' : styles.hide)}></div>
        </>
    )
}

export default Display;