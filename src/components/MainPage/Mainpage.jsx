import React, { useContext } from 'react'
import styles from './MainPage.module.css'
import { ShopStateContext } from '../../App'
import CategoryItem from '../CategoryItems/CategoryItem';

export default function Mainpage() {
    let [categories, setCategories] = useContext(ShopStateContext)
    console.log(categories);
  return (
    <div>
        <div className={styles.container}>
        <h2>Categories</h2>
            <div className={styles.container_flex}>
                {categories.map (item => <CategoryItem {...item}/>)}
            </div>
        </div>
    </div>
  )
}
