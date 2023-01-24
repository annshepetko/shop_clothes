import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import CategoryItem from '../CategoryItems/CategoryItem'
import styles from './BasketPage.module.css'

export default function BasketPage({basketItems = [], setBasketItems}) {
  let itemHandler = (id) =>{
    setBasketItems(basketItems.filter(item => item.id == id ? '' : item))
  }
  
    return (
    <div>
        <div className="">
        <div className={styles.basket_container}>
            <h2 className={styles.title_basket} >Basket</h2>
            {basketItems.length == 0 ? <h3 className={styles.empty_basket}>Basket is empty... ( </h3> : ''}
        { 

            basketItems.map(item => 
            <div className={styles.card_wrapper}>
                <CategoryItem itemHandler ={itemHandler} name={item.title} basketState={true} id={item.id} count={item.count} price={item.price * item.count} image={item.images}/>
            </div>
            )
            
        }
        <NavLink to={'/form'}>
            <Button>
                Issue order
            </Button>
        </NavLink>
        </div>

        </div>
    </div>
  )
}
