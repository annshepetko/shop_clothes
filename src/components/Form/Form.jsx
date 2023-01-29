import React from 'react'
import CategoryItem from '../CategoryItems/CategoryItem'
import styles from './Form.module.css'

export default function Form({orderItems = []}) {
  return (
    <>   
    <div className={styles.main_container}>
        <h2 className={styles.title}>Form</h2>
        <div className={styles.order_container}>
            {
                orderItems.map(item =>{
                return(
                <div className={styles.orderItem_container}>
                    <CategoryItem  
                        name={item.title}
                        basketState={true}
                        id={item.id}
                        count={item.count}
                        price={item.price * item.count}
                        image={item.images}
                    />
                </div>
                )}
                )
            }
        </div>
        <form className={styles.order_inputs}>
            <div className={styles.order_inputs_text}>
                <label for='userName' > Enter your name </label>
                <input id='userName'type="text" />
                <label for='userName' > Enter your name </label>
                <input type="text" />
                <label for='userName' > Enter your name </label>
                <input type="text" />
                <label for='userName' > Enter your name </label>
                <input type="text" />
                <label for='userName' > Enter your name </label>
                <input type="text" />
                <label for='userName' > Enter your name </label>
                <input type="text" />
            </div>
            <div className={styles.order_inputs_radio}>
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
            </div>
        </form>
    </div>
    </>
 
  )
}
