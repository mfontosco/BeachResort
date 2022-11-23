import React from 'react'
import styles from './Header.module.css'


const Header = () => {

  return (
    <div className={styles.container}>
       <h1>Welcome Benjamin</h1>
       <p>You have 9 rooms at Saint Denis</p>
    </div>
  )
}

export default Header