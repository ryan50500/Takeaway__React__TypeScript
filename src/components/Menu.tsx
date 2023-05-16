import React from 'react'
import Images from '../Images'
import styles from './Menu.module.css'


interface menuInterface {
    modal: Boolean;
    // setModal: any;
    setModal: (modal: boolean) => void;
    setIndex: any;
    CartIconClicked: boolean;
}

const Menu = ({ modal, setModal, setIndex, CartIconClicked }: menuInterface) => {
    const openModal = (id: number) => {
        setIndex(id)
        setModal(!modal)
    }
    return (
        <>
            <div className={styles.menu__images + ' ' + (CartIconClicked ? styles.hide__overflow : ' ')}>
                {Images.map((image: any) => {
                    return (
                        // conditional styling - we check two things  1) the div that has 'bhaji' as the dishName value in the array (Images.map((image)) and 2) window.innerWidth is less than 600 
                        <div key={image.id} className={styles.holder} id={image.dishName}
                            style={image.dishName === 'bhaji' && window.innerWidth < 600 ? { flexBasis: '100%', maxWidth: '100%' } : null}
                            onClick={() => openModal(image.id)}>
                            <h3 className={styles.dish__name}>{image.dishName}</h3>
                            <img src={image.image} alt="takeaway dish" />
                        </div>
                    )
                })}
            </div>
            {/* image overlay */}
            <div className={styles.images__overlay + ' ' + (modal ? ' ' : styles.hide)}></div>
        </>
    )
};

export default Menu;