import React from 'react';
import styles from './Search.module.scss';

const Search = ({setSearch, setPageNumber}) => {
  return (
    <from class="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
        <input 
            placeholder='Buscar un personaje...' 
            type="text" 
            class={styles.input}
            onChange={ e => {
                setPageNumber(1);
                setSearch(e.target.value);
            }}
            />
         <buttom onClick={e => {e.preventDefault()}} class={`${styles.btn} btn btn-primary fs-5`}>Buscar</buttom>
    </from>
  )
}

export default Search