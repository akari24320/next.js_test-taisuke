'use client'

import React from 'react'
import styles from './Header.module.css'

export default function Header() {

return (
    <header className={styles.header}>
    <div className={styles.icon}> </div>
    <p className={styles.text}>TAISUKE-Planner</p>
    </header>
)
}