import React from 'react';
import gmailLogo  from '../../assets/icons/gmail_logo_icon.svg';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './Header.scss';


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
             <IconButton><MenuIcon/></IconButton>
                <img 
                    src={gmailLogo} 
                    alt="logo"/>
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input  placeholder="Search email" type="text"/>
                <IconButton>
                    <ArrowDropDownIcon className="header__inputCarret"/>
                </IconButton>    
            </div>
            <div className="header__right">
            
              <IconButton><AppsIcon/></IconButton>  
              <IconButton><NotificationsIcon/></IconButton>  
              <Avatar/>
            </div>
           
        </div>
    );
};

export default Header;