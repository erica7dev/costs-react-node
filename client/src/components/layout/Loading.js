import React from 'react'
import styles from './Loading.module.css'
import loading from '../../assets/loading.svg'

export default function Loading() {
  return (
    <div className={styles.loader_container}>
      <img src={loading} alt="Loading" className={styles.loader} />
    </div>
  )
}
