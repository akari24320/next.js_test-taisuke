'use client'

import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  // 色だけ変える感じで
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>これはフッターです．</p>
      {
        // この上のpタグは実装時には消すこと
      }
    </footer>
  )
}