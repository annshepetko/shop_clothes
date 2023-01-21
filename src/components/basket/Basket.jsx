import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Basket.module.css'

export default function Basket() {
  return (
    <NavLink  to={'/basket'} >
    <div className={styles.basket_container}>
        <img src="https://cdn-icons-png.flaticon.com/512/118/118089.png" alt="" />
    </div>
    </NavLink>
  )
}
