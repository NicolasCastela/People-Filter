import React from 'react'
import Select from 'react-select'
import styles from './Select.module.css'
export default function Testando (){


    const options = [
        {value: 'Chocolate ', label: 'Chocolate'},
        {value : 'Vanilla', label: 'Vanilla'}
        
    ]
   
      
      
    return(
        <div>
      <Select className={styles.botaoselect} options={options} />
    </div>
    )
}