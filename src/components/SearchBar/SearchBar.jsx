import React from 'react';

import './SearchBar.css';


    function SearchBar({ handleChange, placeholder, tagBar , searchName, }) {
        return(
           <input
             className= {
             `${ tagBar ? 'search-Tagbar' : '' }
              search-bar` 
              }
             type='search'
             placeholder={placeholder}
             value={searchName}
             onChange={handleChange} />
        )

    }


export default SearchBar;