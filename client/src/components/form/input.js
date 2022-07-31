import React from 'react'
import styles from './input.module.css'

export default function Input({type, name, placeholder, value,text, handleOnChange}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
    </div>
  )
}
