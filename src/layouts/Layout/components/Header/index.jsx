import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
