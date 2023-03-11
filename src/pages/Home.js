import React from 'react';
import './Home.css';
import SearchBar from '../components/SearchBar';
import logo from '../assets/logo.png';

import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__header">
                <div className="home__headerLeft">
                  <a href="https://about.google/">About</a>
                  <a href="https://store.google.com/in/?hl=en-GB">Store</a>
                </div>
                <div className="home__headerRight">
                  <a href="https://www.google.com/gmail/about/">Gmail</a>
                  <a href="https://www.google.com/imghp?hl=EN">Images</a>
                  <a href="https://workspace.google.com/"><AppsIcon/></a>
                  <a href="https://thakurprathya-portfolio.netlify.app/"><Avatar src={logo}/></a>
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                <div className="home__inputContainer"><SearchBar  mainPage/></div>
            </div>
        </div>
    );
};

export default Home;
