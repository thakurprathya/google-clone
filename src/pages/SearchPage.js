import React from 'react';
import './SearchPage.css';
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

import { useStateValue } from '../context/StateProvider';
import useGoogleSearch from '../hooks/useGoogleSearch';

import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SearchPage = () => {
    const [{term}, dispatch]= useStateValue();   //dispatch will used to update the data layer, destructuring term from data layer
    //API CAll using our custom hook
    const {data} = useGoogleSearch(term);  //calling our hook to retrieve data it fetched from engine depending upon the term
    //as we have limited amout of search provided for a day for development purposes we should create a sample json file and work on that
    //data instead of actual fetching from api

    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" alt="" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
                </Link>
                <div className="searchPage__headerbody">
                    <SearchBar hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option"><SearchIcon/><Link to="/all">All</Link></div>
                            <div className="searchPage__option"><DescriptionIcon/><Link to="/news">News</Link></div>
                            <div className="searchPage__option"><ImageIcon/><Link to="/images">Images</Link></div>
                            <div className="searchPage__option"><LocalOfferIcon/><Link to="/shopping">Shopping</Link></div>
                            <div className="searchPage__option"><RoomIcon/><Link to="/maps">maps</Link></div>
                            <div className="searchPage__option"><MoreVertIcon/><Link to="/more">more</Link></div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option"><Link to="/settings">Settings</Link></div>
                            <div className="searchPage__option"><Link to="/tools">Tools</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (  //if term exist then 
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results (
                        {data?.searchInformation.formattedSearchTime}seconds) for {term}
                    </p>

                    {data?.items.map((item) => (
                        <div className="searchPage__results">
                            <a className="searchPage__resultLink " href="item.link">
                                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src && (
                                    <img className="searchPage__resultImage" src={ item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src } alt=""/>
                                )}
                                {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}><h2>{item.title}</h2></a>
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
