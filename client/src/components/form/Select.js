import React from 'react'
import styles from './Select.module.css'

export default function Select({name, options, value,text, handleOnChange}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select 
      name={name} 
      id={name}
      onChange={handleOnChange}
      value={value || ''}
      >
        <option>Selecione uma opção</option>
        {options.map((options) => (
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
       </select>
    </div>
  )
}
