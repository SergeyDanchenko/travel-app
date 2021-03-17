import React from 'react';
import './searchbox.scss'
const SearchBox = ({placeholder, handleChange}) =>{
    return(
        <input type='search'
        className='search'
        placeholder={placeholder}
        onChange = {handleChange}
        />
    )
}

export default SearchBox;