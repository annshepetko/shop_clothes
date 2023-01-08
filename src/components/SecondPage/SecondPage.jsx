import React, { useEffect } from 'react'
import CategoryItem from '../CategoryItems/CategoryItem'
import styles from './SecondPage.module.css'
import { useParams } from 'react-router-dom'

export default function SecondPage({title, arrayItems, getParams }) {
    let {category} = useParams()
    
    useEffect(()=>{
        window.scrollTo(0, 0)
        getParams(category)
       
    },[])
    console.log(arrayItems);
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <div className={styles.array_flex}>
                {arrayItems.map(item => {           
                
                    return( 
                        <div className={styles.card}>
                            <CategoryItem price={item.price}  id = {item.id} description={item.description} image={item.images} name={item.title}/>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    </div>
  )
}
