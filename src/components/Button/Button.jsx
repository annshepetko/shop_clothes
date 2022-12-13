import {React} from 'react'
import styles from './Button.module.css'
import { NavLink } from 'react-router-dom'

export default function Button({children, path }) {
  return (
    <button  className={styles.btn}>
        <NavLink to={path}>
            {children}
        </NavLink>
    </button>

  )
}
