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
    </div>
    </>
 
  )
}
