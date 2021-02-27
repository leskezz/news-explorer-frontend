import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import { Menu, Close } from '../../images/svg/index';

function Header({ blackTheme, clickAuthHandler, isPopupOpen, onSubmit }) {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function handleMenuClick() {
        setIsMenuOpened(!isMenuOpened)
    }

    return(
        <header className={`header ${blackTheme ? 'header_black' : 'header_white'}`}>
            <div className={`header__top ${blackTheme ? 'header__top_black' : 'header__top_white'} ${isPopupOpen && 'header__top_hide'}`}>
                <Link exact to="/" className={`header__logo ${blackTheme ? 'header__logo_black' : 'header__logo_white'}`}>NewsExplorer</Link>
                <Navigation clickAuthHandler={clickAuthHandler} blackTheme={blackTheme} isMenuOpened={isMenuOpened} />
                <button type="button" onClick={handleMenuClick} className="header__menu-button">
                    {
                        !isMenuOpened ? <Menu width="24px" height="24px" color={blackTheme ? '#fff' : '#1A1B22'} />
                        : <Close width="24px" height="24px" />
                    }
                </button>
            </div>
            {
                blackTheme && <SearchForm onSubmit={onSubmit} />
            }
        </header>
    )
};

export default Header;