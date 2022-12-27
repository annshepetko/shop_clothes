import {React} from 'react'
import styles from './Button.module.css'
import { NavLink } from 'react-router-dom'

export default function Button({children, path }) {
    
  return (
    <NavLink to={path}>
        <button  className={styles.btn}>
            {children}
        </button>
    </NavLink>

  )
}
