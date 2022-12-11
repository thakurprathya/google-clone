import React, { useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';

import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const SearchBar = ({hideButtons= false}) => {  //passing a default prop to component
    const [input, setInput]= useState(""); //creating a state to store entered text in input bar
    const navigate= useNavigate();
    // eslint-disable-next-line
    const [{}, dispatch]= useStateValue();   //dispatch will used to update the data layer

    const search= e =>{  //creating search funct
        e.preventDefault();
        dispatch({  //this  command will dispatch the data term into data layer
            type: actionTypes.SET_SEARCH_TERM,  //setting the type to exact same name as we created in reducer.js
            term: input,  //setting term= current searched input
        });
        navigate('/search'); //navigating to search page if form submitted/ funct called
    }

    return (
        <form className='search'>  {/*making it form as want to include enter button functionality */}
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input type="text" value={input} onChange={e=> setInput(e.target.value)} />  {/*updating state value as input value changes */}
                <MicIcon />
            </div>
            <div className={!hideButtons ? "search__buttons" : "search__buttonsHidden"}>  {/*depending upon the prop making buttons visible or invisible but maintaining enter key functionality */}
                <Button variant="outlined" onClick={search} type="submit">Google Search</Button>  {/*by adding type submit we add enter key submit functionality for this form linked to this button */}
                <Button variant="outlined"><a id="btnLink" href='https://www.google.com/doodles'>I'm Feeling Lucky</a></Button>
             </div>
        </form>
    );
};

export default SearchBar;
