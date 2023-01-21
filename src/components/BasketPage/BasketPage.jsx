import React from 'react'
import CategoryItem from '../CategoryItems/CategoryItem'
import styles from './BasketPage.module.css'

export default function BasketPage({basketItems}) {
  
  
    return (
    <div>
        <div className="">
        <div className={styles.basket_container}>
            <h2 className={styles.title_basket} >Basket</h2>
        { 

            basketItems.map(item => 
            <div className={styles.card_wrapper}>
                <CategoryItem basketState={true} id={item.id} count={item.count} price={item.price * item.count} image={item.images}/>
            </div>
            )
        
        }
        </div>
        </div>
    </div>
  )
}
