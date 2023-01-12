import React, { useContext, useState } from 'react'
import styles from './AboutPage.module.css'
import { useParams } from 'react-router-dom'
import { ShopStateContext } from '../../App'
import Button from '../Button/Button'
import Popup from '../popup/Popup'



function AboutPage({setOrder}) {
    let {id} = useParams()
    let [arrayState, setArrayState] = useContext(ShopStateContext)
    let [aboutState, setAboutState] = useState(arrayState.find(el => el.id == id.valueOf()))
    let[popupState, setPopupState] = useState(false)
    

    let popupHandler = (variant) => {
        setPopupState(variant)
        
    }
    let increment = () =>{
      setAboutState({...aboutState, count: aboutState.count + 1})
    }
    let decrement = () =>{      
        if(aboutState.count > 0 ){
        setAboutState({...aboutState, count: aboutState.count - 1})
        }
    }
    let addHandler = () =>{
        
        setOrder(aboutState)
        popupHandler(true)

    }
    return (
    <div className={styles.main_container}>
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img src ={`${aboutState.images}`} />
            </div>
            <div className={styles.description}>
                <h2>{aboutState.title}</h2>
                <p className={styles.description_text}>{aboutState.description}</p>
                <p className={styles.description_count}>count : {aboutState.count}</p>
                <p className={styles.price}>price: {  aboutState.count > 0 ? aboutState.price * aboutState.count : aboutState.price } $ </p>
                <div className={styles.countStyles}>
                    <div onClick={decrement} className={styles.btns}>
                        <Button>
                            -
                        </Button>
                    </div>
                    <div onClick={increment} className={styles.btns}>
                        <Button>
                            +
                        </Button>
                    </div>
                    <div onClick={addHandler} className={styles.btns_last}>
                        <Button>
                            Add to the basket
                        </Button>
                    </div>
                    
                </div>

           </div>
                { popupState ? <Popup onClick = {()=> {popupHandler(false)}} title={'Successfully added'}/> : ''}
        </div>   

    </div>
  )
}
export default AboutPage 