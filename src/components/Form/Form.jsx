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
                <h2 className={styles.order_inputs_title} >Enter your details</h2>
                <label for='userName' > Your name </label>
                <input id='userName'type="text" />
                <label for='surname' >  Your surname </label>
                <input type="text" id='surname'/>
                <label for='patronym' > Your patronym </label>
                <input type="text" id='patronym' />
                <label for='city' > Your city/town </label>
                <input type="text" id='city' />
                <label for='number' >  Your phone number </label>
                <input type="tel"id='number' />
                <label for='gmail' >  Your gmail </label>
                <input type="gmail" id='gmail' />
            </div>
            <div className={styles.order_inputs_radio}>
                <h2  className={styles.order_inputs_title}>Select a delivery method</h2>
                <div className={styles.order_inputs_radio_block}>
                    <input type="radio" name= "1" id="NovaPoshta" />
                    <label htmlFor="NovaPoshta">Nova poshta</label>
                </div>
                <div className={styles.order_inputs_radio_block}>
                    <input type="radio" name="1" id="meestExpress" />
                    <label htmlFor="meestExpress">Meest Express</label>
                </div>
                <div className={styles.order_inputs_radio_block}>
                    <input type="radio" name="1" id="Ukrposhta" />
                    <label htmlFor="Ukrposhta">Ukr poshta</label>
                </div>
            </div>
        </form>
    </div>
    </>
 
  )
}
