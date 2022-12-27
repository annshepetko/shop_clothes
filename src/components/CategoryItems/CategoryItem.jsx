import {React, useState} from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './CategoryItem.module.css'

export default function CategoryItem({image, name, description, btnState = false, price }) {
    let [hoverState, setHoverState] = useState(false)
    
    let mouseMoveHandler = () => {
        setHoverState(true)
    }

  return (
   
        <div onMouseLeave={()=>{setHoverState(false)}} onMouseEnter={mouseMoveHandler} className={styles.card_container}>
            <div className={styles.img_container}>
                <img src={image} alt="" />
            </div>
            <div className={styles.btn_container}>
                <p  className={styles.container_title}>{name}</p>
                {
                        hoverState && btnState ?
                    <div  className={styles.btn_div}>
                        <NavLink to={name} >
                            <Button>
                                &#8594;
                            </Button>
                        </NavLink>
                    </div>
                    
                    :
                    ""
                }
            </div>
            <div className={styles.container_description__container}>
                <p className={styles.container_description}>{description}</p>
                <p className={styles.price} >price : {price}</p>
            </div>
            
        </div>
    
  )
}
