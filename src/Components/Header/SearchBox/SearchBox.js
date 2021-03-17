import React, { useRef, useEffect } from 'react';
import { getCountriesObjectsByIds } from '../../../helpFunctions/helpFunctions';
import { connect } from 'react-redux';
import { onSearchInputChange } from '../../../actions/actions';

import './searchbox.scss'

const SearchBox = ({ inputValue, onInputChange }) =>{

    const handleChange = (e) => {
        onInputChange(e.target.value)
    };

    return (
        <input
            id='search' 
            type='search'
            className='search'
            placeholder='Country name...'
            value={inputValue}
            onChange={handleChange}
            autoFocus={true}
        />
    )
}

const mapStateToProps = (state) => {
    return {
      countries: getCountriesObjectsByIds(state.countriesData, state.renderCardsIds),
      inputValue: state.searchInputValue, 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (payload) => dispatch(onSearchInputChange(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);