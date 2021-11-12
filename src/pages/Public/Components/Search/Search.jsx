import React from 'react';
import classes from "./Search.module.css"

const Search = (props) => {
    return (
<input className ={classes.Search} {...props}/>            
        
    );
}

export default Search;
