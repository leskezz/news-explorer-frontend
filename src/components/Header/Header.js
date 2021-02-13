import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header({ blackTheme, clickAuthHandler }) {
    return(
        <header className={`header ${blackTheme ? 'header_black' : 'header_white'}`}>
            <div className={`header__top ${blackTheme ? 'header__top_black' : 'header__top_white'}`}>
                <Link exact to="/" className={`header__logo ${blackTheme ? 'header__logo_black' : 'header__logo_white'}`}>NewsExplorer</Link>
                <Navigation clickAuthHandler={clickAuthHandler} blackTheme={blackTheme} />
            </div>
            {
                blackTheme && <SearchForm />
            }
        </header>
    )
};

export default Header;