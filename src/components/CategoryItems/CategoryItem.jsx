import {React, useState} from 'react'
import Button from '../Button/Button'
import styles from './CategoryItem.module.css'

export default function CategoryItem({image, name}) {
    let [hoverState, setHoverState] = useState(false)
    
    let mouseMoveHandler = () => {
        setHoverState(true)
    }

  return (
    <div className={styles.card}>
        <div onMouseLeave={()=>{setHoverState(false)}} onMouseEnter={mouseMoveHandler} className={styles.card_container}>
    
            <img src={image} alt="" />
  
            <p  className={styles.container_text}>{name}</p>
            {
                    hoverState ?
                <div onMouseEnter={transitionChanger}  className={styles.btn_div}>
                    <Button path={name}>
                        &#8594;
                    </Button>
                </div>
                
                :
                ""
            }

        </div>
    </div>
  )
}
