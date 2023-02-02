import React from 'react'
import Button from '../Button/Button'
import styles from './Popup.module.css' 


export default function Popup({title, onClick}) {
    
  return (
    <div className={styles.popup}>
    <div  className={styles.popup__body}>
        <div className={styles.popup__content}>
            <div className={styles.popup__title} >
                 <p>{title}</p>

            </div>
            <div onClick={onClick} className={styles.closeButton}>
                    <Button>
                    &times;
                    </Button>
                </div>
        </div>
    </div>
    </div>
  )
}
