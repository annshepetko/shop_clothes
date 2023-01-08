import React, { useContext, useState } from 'react'
import styles from './AboutPage.module.css'
import { useParams } from 'react-router-dom'
import { ShopStateContext } from '../../App'
import Button from '../Button/Button'

function AboutPage() {
    let {id} = useParams()
    let [arrayState] = useContext(ShopStateContext)
    
    
    let [aboutState, setAboutState] = useState(arrayState.find(el => el.id == id.valueOf()))

    return (
    <div className={styles.main_container}>
        <div className={styles.container}>
            <img src ={`${aboutState.images}`} />
            <div className={styles.description}>
                <h2>{aboutState.title}</h2>
                <p className={styles.description_text}>{aboutState.description}</p>
                <p className={styles.description_count}>count : {aboutState.count}</p>
                
                <div className={styles.btns}>
                    <Button>
                        -
                    </Button>
                </div>
                <div className={styles.btns}>
                    <Button>
                        +
                    </Button>
                </div>
                <div className={styles.btns}>
                    <Button>
                        Add to the basket
                    </Button>
                </div>
           </div>
        </div>  
    </div>
  )
}
export default AboutPage